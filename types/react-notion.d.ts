import reactNotion from "react-notion-dev";

declare module "react-notion-dev" {
    export interface BlockType {
        value :{
            type: string
        }
    }
}