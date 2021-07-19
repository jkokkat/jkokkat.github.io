import Products from "./Products";
import { useState } from 'react';

function Items(props) {
   // let commonLang = props.othrTxt[props.propLang]["common"];
    let itemInfo = props.propItems;

    const [priceRange, setPriceRange] = useState(""); 
    let filterResult;
    let filterData = {
        english: [
            {
                filter: "price",
                options: ["0-25", "25-50","50-100"],
                stateFunc: setPriceRange,
                id: 1
            }
        ],
        french:[
        {
            filter: "",
            options: [],
            stateFunc: setPriceRange,
            id: 2
        }
        ]
    }
 

    let createCard = () =>{
        /* filterResult =  itemInfo.filter((elem) =>  {
            if(priceRange== ""){
                return elem;}
            else {
                return elem.price[props.propLang] == priceRange;
            }
        } */
        
        
           /*  let to_output = filterResult.map( elem => {return (
                <div className="card mb-5 pb-0" key={elem.id} >
                <img src={elem.portrait} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-title fw-bold fs-2">{elem.name[props.propLang]}</p>
                    <p>
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#" + elem.value} aria-expanded="false" aria-controls="collapseExample">
                            {{commonLang.show} }
                        </button>
                    </p>
                    <div className="collapse" id={elem.value} >
                        <div className="card card-body">
                            {elem.desc[props.propLang]}
                        </div>
                    </div>
                </div>
            </div>
            )})
        return (
            to_output
        ) */
    }


    return (
        <div className="items">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Products</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              </div>
              </div>
              </div>
           
        <div className="container-flex ">
            {/* <p className="display-2 text-center">{commonLang.Items}</p> */}
            <div className="row">
                <div className="col">
                <Products filterData = {filterData} propLang = {props.propLang} /*othrTxt = {commonLang}*//>
                </div>
                <div className=" col mr-0  ml-auto ">
                        {
                            createCard()
                    }
                </div>
            </div>
        </div>
        </div>
    );
}

export default Items;