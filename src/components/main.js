import "./index.css"
import "./subcomponents/maintable/table"
function main() {

   
   return(
        <div >
              <button class="btn" >
              Add(+)
          </button>
          <div>
          <input class="new" type="text" placeholder="M.Rashid"/>
                   <input type="email" placeholder="4block@gmail.com"/>
                   <input type="number" placeholder="+923018475637"/>
                   <input type="number" placeholder="33103-3837383-3"/>
</div>
           <table>
               <tr>
                   <td>Sr No</td>
                   <td>Name</td>
                   <td>E-Mail</td>
                   <td>Mobile No</td>
                   <td>CNIC</td>
                   {/* <td>Address</td> */}
                </tr>
                <tr>
                   <td>1</td>
                   <td>Muhammad Rashid</td>
                   <td>23kjdkjd@gmail.com</td>
                   <td>+923049384958</td>
                   <td>33100-3939475-1</td>
                   {/* <td>Street no 7 jarawala road</td> */}
                </tr>
                <tr>
                   <td>2</td>
                   <td>Usama</td>
                   <td>kjdkjsjie@gmail.com</td>
                   <td>+928489464859</td>
                   <td>33103-2948674-3</td>
                   {/* <td>street no 8 jarawala road</td> */}
                </tr>
                <tr>
                   <td>3</td>
                   <td>Ayesha</td>
                   <td>26love@gmail.com</td>
                   <td>+923011987654</td>
                   <td>33100-938765-4</td>
                   {/* <td>street no 7 Lahore</td> */}
                </tr>
                <tr>
                   <td>4</td>
                   <td>Hamna</td>
                   <td>4block@gmail.com</td>
                   <td>+923018475637</td>
                   <td>33103-3837383-3</td>
                   {/* <td>block no c oxford city</td> */}
                </tr>

                <tr >
                   <td>5</td>
                   <td><input class="new" type="text" placeholder="M.Rashid"/></td>
                   <td><input type="email" placeholder="4block@gmail.com"/></td>
                   <td><input type="number" placeholder="+923018475637"/></td>
                   <td><input type="number" placeholder="33103-3837383-3"/></td>
                   {/* <td><input type="text" placeholder="block no c oxford city"/></td> */}
                </tr>
                

           </table>
        </div>
    )
}
export default main;