const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
       // console.log(entry)
        const squares = entry.target.querySelectorAll('.product');
        //alert(entry.isIntersecting ? 'Intersecting' : 'Not Intersecting');
        squares.forEach(square =>
        {
            if (entry.isIntersecting) {
                square.classList.add('product-anim');
                //return; // if we added the class, exit the function
            }
            else 
            {
                square.classList.remove('product-anim');
            }
        })

        // We're not intersecting, so remove the class!
        
    });
});
observer.observe(document.querySelector('.products'));