class Editor {
    EditVideo(video:string){
        console.log(`Editor: I'm Editing the ${video}` )
    }
}
class Company {
    EditVideo(video:string){
        console.log(`Company: I'm Editing the ${video}` )
    }
}
class Entertainer {
    PublishVideo(editor:Editor, video:string,Website:string){
        console.log(`Entertainer: I'm Publishing the ${video} to ${Website}`);
        editor.EditVideo(video);
        console.log(`Entertainer: ${video} Edited and ready to Publish to ${Website} `)
    }
}

export function WithoutDi(){
    let a= new Entertainer;
    let b= new Editor;
    a.PublishVideo(b,'Vlog','Youtube');
}
