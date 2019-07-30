import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/render3';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-house-search',
  templateUrl: './house-search.component.html',
  styleUrls: ['./house-search.component.scss']
})
export class HouseSearchComponent {
  wardno: any;
  lineno: any;
  name: any;
  cardno: any;
  address: any;
  rfid: any;
  swapdetails: any;
  carddetails: any;
  day: any;
  details: any;

  constructor(public db: AngularFireDatabase,  private toastr: ToastrService) { }



  onSubmit2() {


    let contact = (<HTMLInputElement>document.getElementById("contact")).value;
    let card = (<HTMLInputElement>document.getElementById("card")).value;

    if (contact) {
      //console.log("mmm");


      let dbPath = 'HouseWardMapping/' + contact;
      this.db.object(dbPath).valueChanges().subscribe(data => {
        if(data==null){
          this.toastr.error("Please enter a valid contact.", '', {
            timeOut: 60000,
            enableHtml: true,
            closeButton: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: 'toast-bottom-right'
          });
        }
        else{
        this.wardno = data["ward"];
        this.lineno = data["line"];

        this.swapdetails = [];
        let dbPath1 = 'Houses/' + this.wardno + '/' + this.lineno + '/' + contact;
        this.db.object(dbPath1).valueChanges().subscribe(data => {
          this.name = data["name"];
          this.cardno = data["card-no"];
          this.address = data["address"];
          this.rfid = data["rfid"];
          this.swapdetails.push({
            names: this.name,
            cards: this.cardno,
            addresses: this.address
          })

          this.day = [];

          let month = (<HTMLInputElement>document.getElementById("month")).value;
          let date = new Date();
          var year = date.getFullYear();

          for (let index = 1; index < 32; index++) {

            let tempDay;
            if (index.toString().length == 1) {
              tempDay = "0" + index;

            } else {
              tempDay = index;
            }
            let date = year + '-' + month + '-' + tempDay;
            let status;
            let dbPath4 = 'HousesCollectionInfo/' + this.wardno + '/' + date + '/' + this.rfid;

            this.db.object(dbPath4).valueChanges().subscribe(data => {


              if (data == null) {
                status = "NO"
              }
              else {
                status = "YES"
              }

              this.day.push({ 'reportDate': date, 'cardScanned': status });
            })
          }
        });
      }
      });
    
    }

    else if (card) {

      let dbPath3 = 'CardWardMapping/' + card;
      this.db.object(dbPath3).valueChanges().subscribe(data => {
        if(data==null){
          this.toastr.error("Please enter a valid card no. .", '', {
            timeOut: 60000,
            enableHtml: true,
            closeButton: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: 'toast-bottom-right'
          });
        }
        else{
        this.wardno = data["ward"];
        this.lineno = data["line"];

        this.details = [];
       // this.rfid1 = [];
       this.swapdetails = [];
        let dbPath5 = 'Houses/' + this.wardno + '/' + this.lineno;
        this.db.list(dbPath5).valueChanges().subscribe(data => {
          this.details = data;
          
console.log(this.details);
          

          let myData = this.details.find(item=>item["card-no"] == card);
          this.name = myData["name"];
          this.cardno = myData["card-no"];
          this.address = myData["address"];
          this.swapdetails.push({
            names: this.name,
            cards: this.cardno,
            addresses: this.address
          })

          this.day = [];
          let month = (<HTMLInputElement>document.getElementById("month")).value;
              let d = new Date();
              var year = d.getFullYear();

              for (let index = 1; index < 32; index++) {

                let tempDay;
                if (index.toString().length == 1) {
                  tempDay = "0" + index;

                } else {
                  tempDay = index;
                }
                let date = year + '-' + month + '-' + tempDay;
                let status;
                let dbPath4 = 'HousesCollectionInfo/' + this.wardno + '/' + date + '/' + myData["rfid"];
                console.log(dbPath4);
                

                this.db.object(dbPath4).valueChanges().subscribe(data => {


                  if (data == null) {
                    status ="NO"
                  }
                  else {
                    status = "YES"
                  }

                  this.day.push({ 'reportDate': date, 'cardScanned': status });
                })
          

          console.log(myData["rfid"]);
          
  
}
        });
      }
      });
    }
    else{
      this.toastr.error("Enter either contact or card-no.", '', {
        timeOut: 60000,
        enableHtml: true,
        closeButton: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-bottom-right'
      });
      // alert("enter either contact or card-no.")
    }
  }}
      
/*
          for (let index = 0; index < data.length; index++) {

            if (data[index]["card-no"] == card) {
              this.rfid1.push(data[index]["rfid"]);
              this.day = [];

              
              }



            }
            else {
              alert("nooooooooooooo")
            }

            console.log(data[index]["rfid"]);
          }

*/


        
        // console.log(this.details);
    //      // console.log(contact);


    //       // this.carddetails = [];



    //         // this.carddetails.push({
    //         //   line: data["line"],
    //         //   ward: data["ward"]
    //         // })



    //        // console.log(this.name1);



    // //        let dbPath5='Houses/'+this.wardno+'/'+ this.lineno;
    // //        this.db.object(dbPath5, query: { 
    // //          orderByChild: "card-no",
    // //          equalTo: card,
    // //        }
    // //       ).valueChanges().subscribe(data=>{
    // // this.details=data;
    // //       }) ;





    //   this.day = [];

    //   let month = (<HTMLInputElement>document.getElementById("month")).value;
    //   let d = new Date();
    //   var year = d.getFullYear();

    //   for (let index = 1; index < 32; index++) {

    //     let tempDay;
    //     if (index.toString().length == 1) {
    //       tempDay = "0" + index;

    //     } else {
    //       tempDay = index;
    //     }
    //     let date = year + '-' + month + '-' + tempDay;
    //     let status;
    //     let dbPath4 = 'HousesCollectionInfo/' + this.wardno + '/' + date + '/' + this.rfid1;

    //     this.db.object(dbPath4).valueChanges().subscribe(data => {


    //       if (data == null) {
    //         status = "NO"
    //       }
    //       else {
    //         status = "YES"
    //       }

    //       this.day.push({ 'reportDate': date, 'cardScanned': status });
    //     })
    //   }
    // });  
    //     // });
    //     });    

