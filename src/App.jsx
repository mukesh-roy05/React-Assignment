import './App.css'
import PriceCard from './components/PriceCard'
import data from './Data'
function App() {
  

  return (
    <>
      <div className="App">
        <h2 className="animate-charcter" id="title">$ Pricing card</h2>
        {
          data.map((item,index) =>(
              <PriceCard
                title={item.header}
                sub_title={item.sub_header}
                list_1={item.list_1}
                list_2={item.list_2}
                list_3={item.list_3}
                list_4={item.list_4}
                list_5={item.list_5}
                list_6={item.list_6}
                list_7={item.list_7}
                list_8={item.list_8}
              />
          ))
        };
        
      </div>
    </>
  )
}

export default App
