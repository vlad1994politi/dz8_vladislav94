export function car(brand,model,country,year,motor){
    this.brand = brand
    this.model = model
    this.country = country
    this.year = year
    this.motor = motor 
}

export const cars = [new car('bmw','px2','Japan',2014,5),new car('wold','px1','Japan',2010,3.5),new car('mazda','px3','Japan',2010,3),new car('kio','px5','Japan',2003,1),new car('chewrolet','px00','Japan',2005,2)];

 export const carsNames= cars.map((item)=>{
    return `${item.brand},${item.model},${item.motor},${item.year}`
})

export const bigMotor = cars.filter(item =>item.motor>3)

export const oldCars = cars.reduce((item,item2)=>{
    return item.year < item2.year? item : item= item2
})
export const bestMotorCars = cars.reduce((item,item2)=>{
    return item.motor > item2.motor ? item : item = item2
})


export const lastTask = cars.filter(item=>item.year<2010).reduce((item,item2)=>{
    return item.motor>item2.motor?item:item=item2
})