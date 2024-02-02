import './App.css';
// import ferrary from './img/ferrari.avif'

function App() {
  return (
    <div className="App">
      {/* <h1 className='title'>App</h1>
      <img src={ferrary} alt="" /> */}
      <header className='header'>
        <div className="container">
          <nav className="nav">
            <h2 className='title1'><a href="#">HMK</a></h2>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#">Home</a>
              </li>
              <li className="nav__item">
                <a href="#">About</a>
              </li>
              <li className="nav__item">
                <a href="#">Contact</a>
              </li>
              <li className="nav__item">
                <select>
                  <option selected hidden>Lang</option>
                  <option>en</option>
                  <option>uz</option>
                </select>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className='section'>
        <div className="container">
          <h1 className='title'>Computer shopping</h1>
        <ul className="list">
          <li className="list__items">
            <img src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/latitude-14-9440-800x550.png" alt="" />
            <p className='info'>Notebook DELL Inspiration 3511 i5 1135g7 16GB/1TB HDD</p>
            <h2 className='price'>$600</h2>
            <p className='sale'>$50 per month to pay in 12 monthly installments</p>
            <button>order now</button>
          </li>
          <li className="list__items">
            <img src="https://olcha.uz/image/700x700/products/2022-02-15/noutbuk-acer-nitro-5-an515-57-74tt-i7-11800h-16512gb-ssd-rtx3050ti-win11h-156-37022-0.png" alt="" />
            <p className='info'>Notebook Acer Inspiration 3511 i5 1135g7 16GB/1TB HDD</p>
            <h2 className='price'>$700</h2>
            <p className='sale'>$60 per month to pay in 12 monthly installments</p>
            <button>order now</button>
          </li>
          <li className="list__items">
            <img src="https://openshop.uz/public/storage/uploads/products/photos/202309/LbbQL5eN1hBoDAgWyYe1zk6KGmBmGLqDO3PxgjbE.jpg" alt="" />
            <p className='info'>Notebook MacBook Inspiration 3511 i5 1135g7 16GB/1TB HDD</p>
            <h2 className='price'>$1000</h2>
            <p className='sale'>$120 per month to pay in 12 monthly installments</p>
            <button>order now</button>
          </li>
          <li className="list__items">
            <img src="https://olcha.uz/image/266x266/products/xTr7otmqtboZx2JtJUjldS3zoNSuXWOl3khgJDo9WP8JFpbVkwQ2uhmnnDNR.jpg" alt="" />
            <p className='info'>Notebook Lenovo 3511 i5 1135g7 16GB/1TB HDD</p>
            <h2 className='price'>$650</h2>
            <p className='sale'>$70 per month to pay in 12 monthly installments</p>
            <button>order now</button>
          </li>
          <li className="list__items">
            <img src="https://olcha.uz/image/266x266/products/Ok0Yg7gFFGRVCzcoK7tMt7oMQvPPybPkimnIqfsTt35TPV37SSsdZWhyiVW5.jpg" alt="" />
            <p className='info'>Notebook Acer 3511 i5 1135g7 16GB/1TB HDD</p>
            <h2 className='price'>$600</h2>
            <p className='sale'>$50 per month to pay in 12 monthly installments</p>
            <button>order now</button>
          </li>
          <li className="list__items">
            <img src="https://olcha.uz/image/266x266/products/JhWSkt4d8jXopZCl7xWjCQABmIwt0fMOFsrCtIqqCXO92cgp8I8eFeP0BbAH.jpg" alt="" />
            <p className='info'>Notebook Asus Rog strix 3511 i5 1135g7 16GB/1TB HDD</p>
            <h2 className='price'>$3000</h2>
            <p className='sale'>$300 per month to pay in 12 monthly installments</p>
            <button>order now</button>
          </li>
        </ul>
        </div>
      </section>
      <section className='sector'>
        <div className="container">
          <h1 className='my__name'>© Made by Muhammadamin Inc</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
