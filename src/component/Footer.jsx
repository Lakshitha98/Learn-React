

function Footer(){
    const date=new Date();
    const year = date.getFullYear()
    return <footer>copyright © {year}</footer>
}

export default Footer;