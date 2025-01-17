export interface Message {
    id: UniqueId;
    time: TimeStamp;
    text: LongText;
}

/**
 * A numeric value unique wihtin the same collection
 */
export type UniqueId = number;

/**
 * An uncontrolled string value
 */
export type LongText = string;

/**
 * Numeric time representation
 */
export type TimeStamp = number;