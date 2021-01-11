const questions = document.querySelectorAll(".question-item");

questions.forEach((question) => {
	question.addEventListener("click", (e) => {
        e.stopPropagation()
        console.log("clicked");
        const q = e.target.closest(".question-item");
        console.log(q);
        // console.log("this",this);
        // console.log("target",e.target.closest(".question-item"));
        
        const flag = q.getAttribute("data-open") === "false";

        closeAllQuestion();
        
        if(flag) {
            q.setAttribute("data-open", "true");
        }else q.setAttribute("data-open","false")

	},true);
});

const closeAllQuestion = () => {
    questions.forEach(q => {
        q.setAttribute("data-open",false);
    })
}