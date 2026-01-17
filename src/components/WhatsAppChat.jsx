import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

export default function WhatsAppChat() {
  return (
    <WhatsAppWidget
    
      phoneNo="201099531916"
      chatMessage="أهلاً 👋 محتاج مساعدة؟"
      headerTxt="تواصل معايا"
      position="right"
      width="300px"
      height="400px"
      zIndex="1000"
      chatPersonName="احمد مدني"
      
      
    />
  );
}