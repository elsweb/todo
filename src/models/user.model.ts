// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, hasOne, model, property} from '@loopback/repository';
import {UserCredentials} from './user-credentials.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    // generated: true,
    id: true,
  })
  id: string;

  @property({
    type: 'string',
    mysql: {
      default: null
    }
  })
  realm?: string;

  // must keep it
  @property({
    type: 'string',
    mysql: {
      default: null
    }
  })
  username: string;

  // must keep it
  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'boolean',
    mysql: {
      default: false
    }   
  })
  emailVerified?: boolean;

  @property({
    type: 'string',
    mysql: {
      default: null
    } 
  })
  verificationToken?: string;

  @hasOne(() => UserCredentials)
  credentials?: UserCredentials;

  [prop: string]: any;
  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;