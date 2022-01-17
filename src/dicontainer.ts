import 'reflect-metadata';
import { Container, Service,Inject } from 'typedi';

interface EditorInterface{
    EditingSoftware:EditingSoftware;
    EditVideo(video:string):void
}

interface EditingSoftware{
    use():void
}
@Service('Adobe')
class AdobePremiere implements EditingSoftware{
    use(): void {
        console.log(`Adobe: I'm Using Premiere To Edit`)
    }
    
}
@Service('Camtasia')
class Camtasia implements EditingSoftware {
    use(): void {
        console.log(`Camtasia: I'm Using Camatasia To Edit`)
    }
} 
@Service('Part-time')
class PartTimeEditor implements EditorInterface {
    @Inject('Camtasia')
    EditingSoftware: EditingSoftware
    
    EditVideo(video:string){
        console.log(`PartTimeEditor: I'm Editing the ${video}` )
        this.EditingSoftware.use();
    }
}
@Service('Company')
class BigCompany implements EditorInterface {
    @Inject('Adobe')
    EditingSoftware: EditingSoftware
    EditVideo(video:string){
        console.log(`BigCompany: I'm Editing the ${video}` )
        this.EditingSoftware.use();
    }
}
@Service()
class entertainer {
    @Inject('Company')
    editor:EditorInterface
    PublishVideo(video:string,Website:string){
        console.log(`Entertainer: I'm Publishing the ${video} to ${Website}`);
        this.editor.EditVideo(video);
        console.log(`Entertainer: ${video} Edited and ready to Publish to ${Website} `)
    }
}

export function dicontainer(){
    let a =Container.get(entertainer)
    a.PublishVideo('Documentary','Vimeo');
}



