
const Footer = () => {
    return (
        <div>
           <div>
            <footer className="grid grid-cols-5">
               <div className="col-span-2">
               <img src="https://ghorerbazar.com/cdn/shop/files/logo.webp?v=1707766182&width=360" alt="" />
               <p>ঘরেরবাজার , যেখানে স্বাস্থ্য এবং স্থায়িত্বের প্রতিশ্রুতি আমরা যা কিছু করি তার কেন্দ্রবিন্দুতে। আমরা মানসম্পন্ন নিরাপদ পণ্যগুলির একটি বৈচিত্র্যময় পরিসীমা সরবরাহ করতে পেরে গর্বিত যা কেবল আপনার শরীরকেই পুষ্ট করে না বরং পৃথিবিকে একটি স্বাস্থ্যকর গ্রহে পরিণত করতে অবদান রাখে। GhorerBazar.com এ, আমরা সুস্থতার পরিসিমা বৃদ্ধির জন্য বিশুদ্ধ, প্রাকৃতিক উপাদানগুলির শক্তিতে বিশ্বাস করি।</p>
               </div>

               <div>
                <p className="text-xl font-bold text-blue-500">COMPANY</p>
                <div className="flex flex-col gap-3">
                    <a href="#">About Us</a>
                    <a href="#">রিটার্ন পলিসি</a>
                    <a href="#">রিফান্ড পলিসি</a>
                </div>
               </div>

               <div className="" >
                <p className="text-xl font-bold text-blue-500">QUICK HELP</p>
                <div className="flex flex-col gap-3">
                    <a href="#">গ্রাহক সেবা</a>
                    <a href="#">Contact</a>
                </div>
               </div>
               <p>DBID ID : 437361334</p>
            </footer>
           </div>
        </div>
    );
};

export default Footer;