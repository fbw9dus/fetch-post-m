// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "babel-polyfill";

const Name = document.querySelector("#name");
const Email = document.querySelector("#email");
const Pass =document.querySelector("#password");
const MesageSend = document.querySelector("#message");
const Checkbox = document.querySelector("#checkbox");
const SubmitButton = document.querySelector(".btn");

// \/ All of your javascript should go here \/

const FeedJSON = async (body) =>{
    let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(body)
      });

      return await response.json();
};
const responseData = async ()=> {
    let data = await FeedJSON({});
    responseData(data.msgs,data.name,data.email,data.pass);
  };

  SubmitButton.onclick =  async (d) =>{
      d.preventDefault()
      console.log("clicked")
      if(Checkbox.checked ){
        console.log("checked")
      let InputMessage = MesageSend.value;
      let InputName = Name.value;
      let InputEmail = Email.value;
      let InputPass = Pass.value;

      let data = await FeedJSON({
        
        msgs:InputMessage,
        name:InputName,
        email:InputEmail,
        pass:InputPass

      })
      console.log(data)
    }
    else{return}
      
      
    }

  