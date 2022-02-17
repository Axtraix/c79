student_array =[];
function submit(){ 
    console.log("inside submit function")
        var name1 = document.getElementById ("student_name1").value;
        var name2 = document.getElementById ("student_name2").value;
        var name3 = document.getElementById ("student_name3").value;
        var name4 = document.getElementById ("student_name4").value;

        student_array.push(name1);
        student_array.push(name2);
        student_array.push(name3);
        student_array.push(name4);
        console.log(student_array);
        document.getElementById("display_name").innerHTML = student_array;
        document.getElementById("submit_btn").style.display="none";
        document.getElementById("sort_btn").style.display="inline-block";
    }
function sorting(){
    student_array.sort();
    console.log (student_array);
    document.getElementById ("display_name").innerHTML= student_array;   
}