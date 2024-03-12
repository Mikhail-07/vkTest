import {makeAutoObservable} from 'mobx'

export interface IMyStore {
  friendsId: number[];
  fetchError: boolean;
  setFriendsId(id: number, expand: boolean): void;
  setFetchError(): void;
}

export default class MyStore{

  _friendsId: number[]
  _fetchError: boolean

  constructor(){
    this._friendsId = [] 
    this._fetchError = false
    makeAutoObservable(this);
  }

  setFriendsId(id:number, expand:boolean){
    expand
    ? this._friendsId.push(id)
    : this._friendsId = this._friendsId.filter(i => i !== id)
  }

  setFetchError(){
    this._fetchError = true
  }

  get friendsId(){
    return this._friendsId
  }

  get fetchError(){
    return this._fetchError
  }
}