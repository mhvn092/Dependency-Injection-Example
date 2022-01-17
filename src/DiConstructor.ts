interface EditorInterface{
    EditVideo(video:string):void
}

class PartTimeEditor implements EditorInterface {
    EditVideo(video:string){
        console.log(`PartTimeEditor: I'm Editing the ${video}` )
    }
}
class BigCompany implements EditorInterface {
    EditVideo(video:string){
        console.log(`BigCompany: I'm Editing the ${video}` )
    }
}
class entertainer {
    constructor(private editor:EditorInterface){};

    PublishVideo(video:string,Website:string){
        console.log(`Entertainer: I'm Publishing the ${video} to ${Website}`);
        this.editor.EditVideo(video);
        console.log(`Entertainer: ${video} Edited and ready to Publish to ${Website} `)
    }
}

export function diconstructor(){
    let a= new entertainer(new BigCompany());
    a.PublishVideo('ReactionVideo','Instagram');
}
