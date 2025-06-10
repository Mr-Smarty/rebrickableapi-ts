// PartColor type for /api/v3/lego/parts/${string}/colors/
export interface PartColor {
  /** Color ID */
  id: number;
  /** Color name */
  name: string;
  /** RGB hex string */
  rgb: string;
  /** Is transparent */
  is_trans: boolean;
  /** List of element IDs for this part/color */
  elements: string[];
}
