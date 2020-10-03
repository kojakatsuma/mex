import reactNotion from "react-notion";

declare module "react-notion" {
    export interface BlockType {
        value :{
            type: string
        }
    }
}