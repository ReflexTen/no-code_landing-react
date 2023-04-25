import Menu from './Menu'

const Footer = () => {
  return (
    <footer className="footer">
      <Menu />

      <div className="footer__info">
        <p className="footer__info-name">ИП Галиева Мария Альбертовна</p>
        <p className="footer__info-copyright">
          © All Rights Reserved. NoCode, 2023
        </p>
      </div>
    </footer>
  )
}

export default Footer
