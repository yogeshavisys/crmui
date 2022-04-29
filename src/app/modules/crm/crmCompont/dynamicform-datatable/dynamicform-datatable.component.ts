import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-dynamicform-datatable',
  templateUrl: './dynamicform-datatable.component.html',
  styleUrls: ['./dynamicform-datatable.component.scss']
})
export class DynamicformDatatableComponent implements OnInit {

  permission:any=[true,true,true];
  headerList:any=[];
  ajayStri : any ;
  pageNo:any;
  pageSize:any;
  sortBy:any;
  sortDirection:any;
  detailsForm: any;
  isSection: String="";
  data:any={};
  productEntityElementId:number;

  constructor(private allService:CrmservicesService, private router:Router) {

    //  this.allService.isStringUrl.subscribe(sucess=>{
    //    alert(isStringUr+l'test')
    //   this.allService.getsectionFrom(sucess).subscribe((data:any)=>{
    //   // this.detailsForm=data;
    //   // this.isSection=data.page[0].tabSections[0].section.type;
    // //   this.headerList=sucess.headerlist  ; //sucess.headerList;
    // // this.data=sucess.page;
    //   });
    // })
    
    this.allService.getDynamicTableData(0).subscribe((sucess)=>{
      this.headerList=sucess.headerlist;
    })
   

      this.allService.isStringUrl.subscribe(sucessId=>{
        // alert("id"+sucessId);
        this.productEntityElementId = +sucessId;
        this.allService.getDynamicTableData(sucessId).subscribe((sucess)=>{
          // this.headerList=sucess.headerlist; //sucess.headerList;
          this.data=sucess.page;
         });
    })


   }

  ngOnInit(): void {
    // this.allService.getDynamicTableData(-1 + "?pageNo=1&pageSize=5").subscribe(sucess=>{
    //   this.headerList=sucess.headerlist ;   
    //   // this.data=sucess.page;

    //   },error=>{
    //     // alert(error);
    //   }
  }
  

  
changePageSortSearch(url:any){
  this.ajayStri =""+ url.toString();
  var splittedpaging = this.ajayStri.split('&',4);
  this.pageNo=splittedpaging[0].substring(splittedpaging[0].indexOf("=")+1,splittedpaging[0].length);
  this.pageSize=splittedpaging[1].substring(splittedpaging[1].indexOf("=")+1,splittedpaging[1].length);
  this.sortBy=splittedpaging[2].substring(splittedpaging[2].indexOf("=")+1,splittedpaging[2].length);
  this.sortDirection=splittedpaging[3].substring(splittedpaging[3].indexOf("=")+1,splittedpaging[3].length);

 
    console.log(url,'dattaaa')
}


buttonEvent1(data:any){
if(data.event=='add'){
  this.router.navigate(['crm/dynamicForm'],{ queryParams: {id: this.productEntityElementId}});   
}else if(data.event=='edit'){
// debugger
  console.log("test"+JSON.stringify(data.data.templateId)); 
  this.router.navigate(['crm/dynamicForm'],{ queryParams: {id: data.data.templateId, tabId: data.data.tabId,version: data.data.version }});
  // this.router.navigate(['crm/product-family-form'],{ queryParams: { data: JSON.stringify(data.data.productFamilyId)} });
} else if(data.event == 'delete'){
  // alert(JSON.stringify(  data));
  // this.allService.deleteProductFamily(data.data.productFamilyId, data.data.updatedBy).subscribe((res)=>{
    // console.log(res);
  //   alert('Record deleted');
  
  //   // this.changePageSortSearch(url);
  // })  

} 
}

}
