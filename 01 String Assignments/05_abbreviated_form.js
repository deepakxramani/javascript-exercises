function abbre_name(str1){
    var split_name = str1.trim().split(" ")
    if(split_name.length>1){
        return (split_name[0]+" "+split_name[1].charAt(0)+".")
    }
    else{
        return split_name[0]
    }
}   

console.log(abbre_name("Robin Singh"))

/*
Here's a step-by-step explanation of the code:

var split_names = str1.trim().split(" ");: 
This line first removes any leading or trailing 
whitespace from the input string str1 using the 
trim() method. Then, it splits the resulting string 
into an array of substrings using a space character (" ") 
as the delimiter. This effectively separates the full name 
into an array of two elements, one for the first name and 
one for the last name (assuming a space is used as the separator).

if (split_names.length > 1) { ... }: This if statement checks 
whether the split_names array has more than one element. If it 
does, it means that there is a first name and a last name.

return (split_names[0] + " " + split_names[1].charAt(0) + ".");: 
If there are both a first name and a last name, this line constructs 
the abbreviated name by taking the first name as is (split_names[0]), 
adding a space, and then appending the first character of the last name 
followed by a period (split_names[1].charAt(0) + "."). This results in an 
abbreviation like "Robin S." for the input "Robin Singh."

If there's only one name (no last name), the function returns just the first name.
*/