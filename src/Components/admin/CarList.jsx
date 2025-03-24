import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CarList = () => {

  const carList = [
    { id: 1, name: "Mercedes-Benz S-Class", price: 7000000, description: "Mercedes-Benz S-Class is a luxury sedan known for its premium features and smooth ride." },
    { id: 2, name: "BMW X5", price: 6500000, description: "BMW X5 is a midsize luxury SUV offering powerful performance and advanced technology." },
    { id: 3, name: "Audi Q7", price: 6200000, description: "Audi Q7 is a spacious luxury SUV with a stylish design and cutting-edge features." },
    { id: 4, name: "Tesla Model S", price: 7500000, description: "Tesla Model S is a high-performance electric sedan with exceptional range and autopilot capabilities." },
    { id: 5, name: "Toyota Land Cruiser", price: 8500000, description: "Toyota Land Cruiser is a robust SUV known for its off-road capabilities and durability." },
    { id: 6, name: "Lexus RX 500h", price: 7000000, description: "Lexus RX 500h is a luxury hybrid SUV offering great fuel efficiency and comfort." },
    { id: 7, name: "Range Rover Evoque", price: 6800000, description: "Range Rover Evoque is a compact luxury SUV with a stylish design and premium interiors." },
    { id: 8, name: "Hyundai Tucson", price: 3000000, description: "Hyundai Tucson is a budget-friendly SUV with modern features and spacious interiors." },
    { id: 9, name: "Kia Seltos", price: 2500000, description: "Kia Seltos is a versatile SUV with smart technology and excellent safety features." },
    { id: 10, name: "Honda Accord", price: 4500000, description: "Honda Accord is a reliable midsize sedan known for its smooth ride and fuel efficiency." },
    { id: 11, name: "Nissan X-Trail", price: 4600000, description: "Nissan X-Trail is a rugged SUV with spacious interiors and off-road capability." },
    { id: 12, name: "Volkswagen Tiguan", price: 4800000, description: "Volkswagen Tiguan is a refined SUV with German engineering and impressive performance." },
    { id: 13, name: "Porsche Cayenne", price: 9500000, description: "Porsche Cayenne is a luxury performance SUV with sports car-like handling." },
    { id: 14, name: "Ferrari Roma", price: 25000000, description: "Ferrari Roma is a sleek and stylish grand tourer with powerful V8 engine performance." },
    { id: 15, name: "Lamborghini Urus", price: 28000000, description: "Lamborghini Urus is a super SUV combining luxury, speed, and off-road capability." },
    { id: 16, name: "Jeep Wrangler", price: 5500000, description: "Jeep Wrangler is a rugged off-roader, perfect for adventure enthusiasts." },
    { id: 17, name: "Ford Mustang", price: 5000000, description: "Ford Mustang is a legendary American muscle car with thrilling performance." },
    { id: 18, name: "Chevrolet Tahoe", price: 6500000, description: "Chevrolet Tahoe is a full-size SUV offering a spacious cabin and powerful towing capability." },
    { id: 19, name: "Suzuki Swift", price: 1500000, description: "Suzuki Swift is a compact hatchback known for its fuel efficiency and nimble handling." },
    { id: 20, name: "Mazda CX-5", price: 3200000, description: "Mazda CX-5 is a stylish compact SUV with premium features and dynamic driving experience." }
  ];


  return (
    <>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "auto auto auto",
        gap: 10,
        alignItems: "center",
        justifyContent: "center"
      }}>
        {carList.map((car) => (
          <Card sx={{ maxWidth: 345 }} key={car.id}>
            <CardContent>

              <>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", }} >
                  <Typography gutterBottom variant="h5" component="div">
                    {car.name}
                  </Typography>
                  <Typography>
                    &#8377;{car.price}
                  </Typography>
                </div>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {car.description}
                </Typography>
              </>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  )
}

export default CarList