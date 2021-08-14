export type Action = {type: 'CREATE_TASK'} | {type:'DELETE_TASK'}


export type Dispatch = (action: Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;

