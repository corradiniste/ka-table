import { DataType, SortDirection, TextAlign } from '../enums';
import { CellFunc, EditorFunc, HeaderCellFunc, SearchFunc, ValidationFunc } from '../types';

/**
 * Describes column of table its look and behaviour
 */
export class Column {
  public cell?: CellFunc;
  public dataType?: DataType = DataType.String;
  public editor?: EditorFunc;
  public filterCell?: EditorFunc;
  public field?: string;
  public headCell?: HeaderCellFunc;
  public isCustom?: boolean;
  public isEditable?: boolean;
  public key!: string;
  public search?: SearchFunc;
  public sortDirection?: SortDirection;
  public style?: React.CSSProperties;
  public textAlign?: TextAlign;
  public title?: string;
  public validation?: ValidationFunc;
}
