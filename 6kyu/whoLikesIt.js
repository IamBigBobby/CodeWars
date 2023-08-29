// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

let names = ['Jacob', 'Alex'];

function likes(names) {
  if (names.length === 0){
    return 'no one likes this';
  }
  else if (names.length === 1){
    return `${names[0]} likes this`;
  }
  else if (names.length === 2){
    return `${names[0]} and ${names[1]} like this`;
  }
  else if (names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  else if (names.length >= 4){
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

console.log(likes(names));