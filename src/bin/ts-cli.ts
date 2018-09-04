import { config } from 'dotenv';
config();

import { Cac } from 'cac';
import { hello } from '../hello';

/**
 * TS-CLI handles the incoming CLI options using CAC, rather than manually
 * processing process.argv.
 */
export class TsCli {
  private package: any;
  private cli: any = new Cac();

  public showError() {
    process.exit();
  }

  /**
   * @function initialize
   * @return void
   */
  public initialize() {
    this.cli.on('parsed', (command: any, input: any, flags: any) => {
      if (!command) {
        this.cli.showHelp();
        process.exit();
      }
    });

    const h = this.cli
      .command(
        'hi',
        {
          desc: 'TS CLI hello',
          alias: 'hello'
        },
        (input: any, flags: any) => {
          const output = hello(flags.t || undefined);
          console.log(output);
        }
      )
      .option('target', {
        alias: 't',
        desc: 'say hello to',
        default: ''
      });

    // Bootstrap the CLI app
    this.cli.parse();
  }
}

const app = new TsCli();
app.initialize();
