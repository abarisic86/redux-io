import _ from 'lodash';
import {
  REFERENCE_STATUS,
} from './../middleware';
import {
  validationStatus,
} from './../status';
import thunkAction from './_thunkAction';

export function invalidate(schema) {
  if (!_.isString(schema)) {
    throw new Error(`Invalid schema, "invalidate" expected a string but got: ${JSON.stringify(schema)}`);
  }

  return {
    type: REFERENCE_STATUS,
    meta: {
      schema,
      tag: '*',
    },
    payload: {
      validationStatus: validationStatus.INVALID,
    },
  };
}

export default thunkAction(invalidate);
