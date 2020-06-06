window.onload = function() {

    let Memory = {
        cards:[
            {
                id: 1,
                name:"Эконом",
                sizes:"90х70х180 см",
                area:"0,63 м2",
                cost: 100,
                img:"img/catOne.jpg",
                equipment:[
                    {
                        name:"Пустой номер",
                        img:"../img/nothing.svg"
                    }
                ]
            }, 
            {
                id: 2,
                name:"Эконом плюс",
                sizes:"90х100х180 см",
                area:"0,90 м2",
                cost:200,
                img:"img/catTwo.jpg",
                equipment:[
                    {
                        name:"Лежак",
                        img:"../img/sunbed.svg"
                    },
                    {
                        name:"Когтеточка",
                        img:"../img/scratch.svg"
                    }
                ]
            },    
            {
                id: 3,
                name:"Комфорт",
                sizes:"100х125х180 см",
                area:"1,13 м2",
                cost:250,
                img:"img/catThree.jpg",
                equipment:[
                    {
                        name:"Лежак",
                        img:"../img/sunbed.svg"
                    },
                    {
                        name:"Когтеточка",
                        img:"../img/scratch.svg"
                    },
                    {
                        name:"Игровой-комплекс",
                        img:"../img/game.svg"
                    }
                ]
            },
            {
                id: 4,
                name:"Сьют",
                sizes:"125х125х180 см",
                area:"1,56 м2",
                cost:350,
                img:"img/catFour.jpg",
                equipment:[
                    {
                        name:"Лежак",
                        img:"../img/sunbed.svg"
                    },
                    {
                        name:"Когтеточка",
                        img:"../img/scratch.svg"
                    },
                    {
                        name:"Игровой-комплекс",
                        img:"../img/game.svg"
                    }
                ]
            },       		
            {
                id: 5,
                name:"Люкс",
                sizes:"160х160х180 см",
                area:"2,56 м2",
                cost:500,
                img:"img/catFive.jpg",
                equipment:[
                    {
                        name:"Лежак",
                        img:"../img/sunbed.svg"
                    },
                    {
                        name:"Когтеточка",
                        img:"../img/scratch.svg"
                    },
                    {
                        name:"Игровой-комплекс",
                        img:"../img/game.svg"
                    },
                    {
                        name:"Домик",
                        img:"../img/home.svg"
                    }
                ]
            },       		
            {
                id: 6,
                name:"Супер-Люкс",
                sizes:"180х160х180 см",
                area:"2,88 м2",
                cost:600,
                img:"img/catSix.jpg",
                equipment:[
                    {
                        name:"Лежак",
                        img:"../img/sunbed.svg"
                    },
                    {
                        name:"Когтеточка",
                        img:"../img/scratch.svg"
                    },
                    {
                        name:"Игровой-комплекс",
                        img:"../img/game.svg"
                    },
                    {
                        name:"Домик",
                        img:"../img/home.svg"
                    }
                ]
            },       		       			   			
        ],
        cardsList:[],
        areaCheckboxes:[
            {
                id:"checkbox_area_1",
                status: true,
                value:"0,63 м2"
            },
            {
                id:"checkbox_area_2",
                status: true,
                value:"0,90 м2"
            },
            {
                id:"checkbox_area_3",
                status: true,
                value:"1,13 м2"
            },
            {
                id:"checkbox_area_4",
                status: true,
                value:"1,56 м2"
            },
            {
                id:"checkbox_area_5",
                status: true,
                value:"2,56 м2"
            },
            {
                id:"checkbox_area_6",
                status: true,
                value:"2,88 м2"
            },
            
        ],
        equipCheckboxes:[
            {
                id:"checkbox_equip_1",
                status: true,
                value:"Пустой номер"
            },
            {
                id:"checkbox_equip_2",
                status: true,
                value:"Лежак"
            },
            {
                id:"checkbox_equip_3",
                status: true,
                value:"Когтеточка"
            },
            {
                id:"checkbox_equip_4",
                status: true,
                value:"Игровой-комплекс"
            },
            {
                id:"checkbox_equip_5",
                status: true,
                value:"Домик"
            },
        ],
        costfilter:{
            from:100,
            to:600
        },

        init: function(/*cards*/){
            this.filterMethodsMap = new Map();
            this.filterMethodsMap.set("areaup", (a, b) => a.area > b.area ? 1 : -1)
            this.filterMethodsMap.set("areadown", (a, b) => a.area > b.area ? -1 : 1)
            this.filterMethodsMap.set("costup", (a, b) => a.cost > b.cost ? 1 : -1)
            this.filterMethodsMap.set("costdown", (a, b) => a.cost > b.cost ? -1 : 1)

            this.cards_marketplace = document.getElementById('cards_marketplace');
            //this.cards_marketplace.innerHTML="";
            console.log(this.cards);
            this.$useFilterButton = $("#button_apply");
            this.$useResetButton = $("#button_reset");
            this.cardsList = this.cards;
            this.buildHtml(this.cardsList);
            this.binding();
            //this.cards_marketplace.appendChild(mydata);
        },
        binding: function(){
			//this.$useFilterButton.on("click", this.useFilterClicked);
			this.$useFilterButton.on("click", () => {
                this.cards_marketplace.innerHTML="";
                this.updatefilters(); 
                this.fillnewList();
                this.buildHtml(this.cardsList);
            });

            this.$useResetButton.on("click", () => {
                this.cards_marketplace.innerHTML="";
                this.updatefilters(); 
                this.cardsList = this.cards;
                this.buildHtml(this.cardsList);
            });

            $("select").on("change" , () => {
                var selection = $("select").find("option:selected").attr("id");
                this.cardsList.sort(this.filterMethodsMap.get(selection));
                this.cards_marketplace.innerHTML="";
                this.buildHtml(this.cardsList);
                console.log(selection);
                  
            });
        },
        buildHtml: function buildHtml(cards){
            cards.forEach(element => {
                let mycard = document.createElement("div");
                let imgCard = " ";
                element.equipment.forEach(staff =>{
                        imgCard += " <img class = \"img_Equipment\" src=\"" + staff.img + "\"> ";
                    });            
                mycard.className = "cards__card";
                mycard.innerHTML += "<img src=\"" + element.img +"\" alt=\"imageCard\" class=\"cards__card__image\">" +
                "<div class=\"card_text\">"+
                    "<h2 class = \"card__title\">"+
                    element.name+
                    "</h2>"+
                    "<span>Размеры(ШхГхВ) - "+ element.sizes +"</span>"+
                    "<span>Площадь: "+ element.area +"</span> <span>Оснащение номера" + imgCard + "</span>" + 
                    "<span>Цена за сутки: <span class=\"card_cost\">"+ element.cost + "₽</span></span>"+
                    "<button class=\"card__button\">"+
                    "<span class=\"card__button__text\">"+
                    "Забронировать"+                           
                    "</span>"+
                    "<img src=\"img/paw.svg\" class=\"cards__card__paw\"></img>"+
                    "</button></div>"+
                    "</div>";
                    this.cards_marketplace.appendChild(mycard);
                    console.log(mycard.innerHTML);
            });
        },
        updatefilters: function(){
            this.costfilter.from = Number.parseInt(document.getElementById("from").value);
            this.costfilter.to = Number.parseInt(document.getElementById("to").value);

            for(let i=0; i < this.areaCheckboxes.length; i++){
                this.areaCheckboxes[i].status = document.getElementById(this.areaCheckboxes[i].id).checked;
            }

            for(let i=0; i < this.equipCheckboxes.length; i++){
                this.equipCheckboxes[i].status = document.getElementById(this.equipCheckboxes[i].id).checked;
            }
            console.log(JSON.stringify(this.areaCheckboxes));
            console.log(JSON.stringify(this.equipCheckboxes));
        },
        fillnewList: function(){
            console.log(JSON.stringify(this.costfilter));

            this.cardsList = this.cards.filter(element =>{
                let equip_flag = true;

                this.equipCheckboxes.forEach(checkbox => {
                    console.log(JSON.stringify(checkbox));
                    if(checkbox.status){
                        let alarm = element.equipment.filter(x => x.name === checkbox.value).length > 0;
                        if(!alarm){
                            equip_flag = false;
                        }  
                    }     
                })

                let area_flag = this.areaCheckboxes.filter(x => x.value === element.area && x.status).length > 0;

                console.log(JSON.stringify(element.cost));

                let cost_flag = false;
                if(element.cost >= this.costfilter.from && element.cost <= this.costfilter.to)
                    cost_flag = true;
                              
                return area_flag && equip_flag && cost_flag;
            })
            console.log(this.cardsList);
        }

        
    }
    

    

    //Memory.init(cards);
    Memory.init();
    
}