export interface SearchResult{
    id:string,
    title:string,
    url:string
}

export interface Comment{
    id:string,
    comment:string,
    timestamp?:string
}

export interface Gif{
    id:string,
    title:string,
    url:string,
    comments: Comment[]
}

