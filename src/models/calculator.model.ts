
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    if(OperatorKeys.SQRT) {
      this._buffer += ' TODO'
    } else {
      this._buffer += ' ' + key + ' ';
    }
  }

  public pressActionKey(key: ActionKeys): void {
    switch(key) {
      case(ActionKeys.EQUALS):
        this._buffer += ' ' + key + ' '+ eval(this._buffer);
        break;
      case(ActionKeys.CLEAR):
        this._buffer = '';
        break;
      case(ActionKeys.DOT):
        this._buffer += '.';
        break;
      case(ActionKeys.SIGN_FLIP):
        this._buffer += '* -1';
        break;
      default:
        break;
    }
  }

  public display(): string {
    return this._buffer;
  }

}