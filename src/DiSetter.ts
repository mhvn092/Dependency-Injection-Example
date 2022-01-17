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
    editor:EditorInterface;
    constructor(){};
    setEditor(_editor:EditorInterface){
        this.editor=_editor;
    }

    PublishVideo(video:string,Website:string){
        if (!this.editor) {
            throw new Error("you should edit the video, it looks horrible whitout edditing");
          }
        console.log(`Entertainer: I'm Publishing the ${video} to ${Website}`);
        this.editor.EditVideo(video);
        console.log(`Entertainer: ${video} Edited and ready to Publish to ${Website} `)
    }
}

export function disetter(){
    let a= new entertainer();
    a.setEditor(new PartTimeEditor);
    a.PublishVideo('GamingVideo','Twitch');
}
