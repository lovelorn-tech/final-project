const getPosts = async (filter = null) => {
  let posts = [];
  await fetch("/TP-UTN-2023/mocks/products.json")
    .then((res) => res.json())
    .then(res => {
        if(filter === null){
            res.forEach(post => {
                posts.push(post);
            })
        }
        else{
            res.forEach(post => {
                if(filter(post)) posts.push(post);
            })
        }
    })
    .catch(console.log);
  return posts;
};

export {getPosts};
