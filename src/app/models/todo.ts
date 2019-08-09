export interface iTodo  {
    id: number,
    status: boolean,
    text: string,
    title: string
}

export interface iTodoEdit {
    id: number,
    title: string,
    text: string,
}

export interface iTodoNew {
    title: string,
    body: string,
    userId: number
}
