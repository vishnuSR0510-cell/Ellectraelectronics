// ===============================
// 📦 CATEGORY SETUP
// ===============================
const categories = [
  { name: "Microcontrollers", img: "assets/image/shoppic/microconnector.jpg" },
  { name: "Sensors Modules", img: "assets/image/shoppic/sensors.jpg" },
  { name: "Motors", img: "assets/image/shoppic/motor.jpg" },
  { name: "Meters & Measurement Modules", img: "assets/image/shoppic/meter.jpg" },
  { name: "Relay Modules", img: "assets/image/shoppic/relay.jpg" },
  { name: "Power Boards & Voltage Regulators", img: "assets/image/shoppic/pic1.png" },
  { name: "Wireless & Communication Modules", img: "assets/image/shoppic/Wireless.jpg" },
  { name: "Motor Drivers & Speed Controllers", img: "assets/image/shoppic/pic1.png" },
  { name: "Display Modules", img: "assets/image/shoppic/pic1.png" },
  { name: "Capacitors", img: "assets/image/shoppic/pic1.png" },
  { name: "Diodes", img: "assets/image/shoppic/pic1.png" },
  { name: "Transistors", img: "assets/image/shoppic/pic1.png" },
  { name: "IC Chips", img: "assets/image/shoppic/ic.jpg" },
  { name: "Wires & Cables", img: "assets/image/shoppic/pic1.png" },
  { name: "Connectors", img: "assets/image/shoppic/connects.jpg" },
  { name: "Solar Panel", img: "assets/image/shoppic/solar.jpg" },
  { name: "Switches", img: "assets/image/shoppic/Switch.jpg" },
  { name: "LEDs", img: "assets/image/shoppic/pic1.png" },
  { name: "Breadboards", img: "assets/image/shoppic/bread board.jpg" },
  { name: "Raspberry Pi", img: "assets/image/shoppic/pic1.png" },
  { name: "Tools", img: "assets/image/shoppic/Tools.jpg" },
  { name: "Battery & Chargers", img: "assets/image/shoppic/battery.jpg" },
];

const container = document.getElementById("category-container");

categories.forEach(cat => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
  col.innerHTML = `
    <div class="category-card h-100" onclick="openCategory('${cat.name}')">
      <img src="${cat.img}" alt="${cat.name}" class="category-img">
      <div class="category-body">
        <h5>${cat.name}</h5>
        <button class="btn btn-view mt-2">View Products</button>
      </div>
    </div>
  `;
  container.appendChild(col);
});

function openCategory(categoryName) {
  window.location.href = `product.html?category=${encodeURIComponent(categoryName)}`;
}

// Highlight current nav item
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active", "text-info");
  }
});

// ===============================
// 🔍 SEARCH FUNCTIONALITY
// ===============================

// Master product list (you can keep extending)
// 🔍 Master Product List
const allProducts = [
  // -----------------------------
  // 💡 MICROCONTROLLERS 
  // -----------------------------
  { code: "001", name: "Arduino Nano", category: "Microcontrollers", price: 225, img: "assets/image/Microcontroller/code1.png" },
  { code: "002", name: "Arduino Uno SMD CH340 (compatible)", category: "Microcontrollers", price: 230, img: "assets/image/Microcontroller/code2.png" },
  { code: "003", name: "Arduino UNO R3 DIP (compatible)", category: "Microcontrollers", price: 400, img: "assets/image/Microcontroller/code3.jpg" },
  { code: "004", name: "STM32F103 Bluepill", category: "Microcontrollers", price: 185, img: "images/micro/bluepill.jpg" },
  { code: "005", name: "Arduino Mega CP2102", category: "Microcontrollers", price: 1300, img: "images/micro/mega.jpg" },
  { code: "006", name: "Raspberry Pi Pico H", category: "Microcontrollers", price: 450, img: "images/micro/pico-h.jpg" },
  { code: "007", name: "Raspberry Pi Pico W (WiFi)", category: "Microcontrollers", price: 550, img: "images/micro/pico-w.jpg" },
  { code: "008", name: "Pro Mini (5V)", category: "Microcontrollers", price: 230, img: "images/micro/promini.jpg" },
  { code: "009", name: "ESP32 WROOM32 (30 Pins, Type C)", category: "Microcontrollers", price: 350, img: "images/micro/esp32-30c.jpg" },
  { code: "010", name: "ESP32 WROOM32 (38 Pins, Type B)", category: "Microcontrollers", price: 400, img: "images/micro/esp32-38b.jpg" },
  { code: "011", name: "ESP32 WROOM32 (30 Pins, Type B)", category: "Microcontrollers", price: 350, img: "images/micro/esp32-30b.jpg" },
  { code: "012", name: "ESP32-C6-WROOM (Type C)", category: "Microcontrollers", price: 700, img: "images/micro/esp32-c6.jpg" },
  { code: "013", name: "NodeMCU ESP8266 CH340G (Type B)", category: "Microcontrollers", price: 210, img: "images/micro/nodemcu8266.jpg" },
  { code: "014", name: "NodeMCU ESP32 CP2102 (Type B)", category: "Microcontrollers", price: 300, img: "images/micro/nodemcu32.jpg" },
  { code: "015", name: "STM32F411C (Blackpill, Type C)", category: "Microcontrollers", price: 300, img: "images/micro/blackpill.jpg" },
  { code: "016", name: "ESP8266 (ESP-01)", category: "Microcontrollers", price: 125, img: "images/micro/esp01.jpg" },

  // -----------------------------
  // 🌡️ SENSORS MODULES 
  // -----------------------------
  { code: "031", name: "Flame Sensor", category: "Sensors Modules", price: 50, img: "images/sensors/flame.jpg" },
  { code: "032", name: "IR Module", category: "Sensors Modules", price: 40, img: "images/sensors/ir.jpg" },
  { code: "033", name: "Rain Sensor", category: "Sensors Modules", price: 50, img: "images/sensors/rain.jpg" },
  { code: "034", name: "Soil Sensor", category: "Sensors Modules", price: 75, img: "images/sensors/soil.jpg" },
  { code: "035", name: "Ultrasonic Sensor HC-SR04", category: "Sensors Modules", price: 70, img: "images/sensors/ultrasonic.jpg" },
  { code: "036", name: "LDR Module", category: "Sensors Modules", price: 40, img: "images/sensors/ldr.jpg" },
  { code: "037", name: "Ultrasonic Waterproof Sensor", category: "Sensors Modules", price: 300, img: "images/sensors/ultrasonic-waterproof.jpg" },
  { code: "038", name: "Sound Sensor (3 Pin)", category: "Sensors Modules", price: 70, img: "images/sensors/sound3.jpg" },
  { code: "039", name: "Sound Sensor (4 Pin)", category: "Sensors Modules", price: 80, img: "images/sensors/sound4.jpg" },
  { code: "040", name: "PIR Sensor", category: "Sensors Modules", price: 85, img: "images/sensors/pir.jpg" },
  { code: "041", name: "Vibration Sensor", category: "Sensors Modules", price: 70, img: "images/sensors/vibration.jpg" },
  { code: "042", name: "MPU6050 Sensor", category: "Sensors Modules", price: 170, img: "images/sensors/mpu6050.jpg" },
  { code: "043", name: "TSOP Remote Receiver", category: "Sensors Modules", price: 50, img: "images/sensors/tsop.jpg" },
  { code: "045", name: "DHT11 Temperature Sensor", category: "Sensors Modules", price: 90, img: "images/sensors/dht11.jpg" },
  { code: "046", name: "DHT22 Temperature Sensor", category: "Sensors Modules", price: 220, img: "images/sensors/dht22.jpg" },
  { code: "047", name: "Water Flow Sensor", category: "Sensors Modules", price: 350, img: "images/sensors/waterflow.jpg" },
  { code: "048", name: "MQ3 Alcohol Sensor", category: "Sensors Modules", price: 130, img: "images/sensors/mq3.jpg" },
  { code: "049", name: "MQ2 Smoke Sensor", category: "Sensors Modules", price: 120, img: "images/sensors/mq2.jpg" },
  { code: "050", name: "MQ4 Methane Sensor", category: "Sensors Modules", price: 125, img: "images/sensors/mq4.jpg" },
  { code: "051", name: "MQ6 LPG Sensor", category: "Sensors Modules", price: 170, img: "images/sensors/mq6.jpg" },
  { code: "052", name: "MQ7 Carbon Monoxide Sensor", category: "Sensors Modules", price: 150, img: "images/sensors/mq7.jpg" },
  { code: "053", name: "MQ135 Air Quality Sensor", category: "Sensors Modules", price: 150, img: "images/sensors/mq135.jpg" },
  { code: "054", name: "TCRT5000 Line Sensor (1 pcs)", category: "Sensors Modules", price: 65, img: "images/sensors/tcrt5000.jpg" },
  { code: "055", name: "IR Remote Module", category: "Sensors Modules", price: 80, img: "images/sensors/ir-remote.jpg" },
  { code: "056", name: "Current Sensor", category: "Sensors Modules", price: 125, img: "images/sensors/current-sensor.jpg" },
  { code: "057", name: "0-25V Voltage Sensor", category: "Sensors Modules", price: 35, img: "images/sensors/voltage-25v.jpg" },
  { code: "058", name: "AC Voltage Sensor ZMPT101B", category: "Sensors Modules", price: 140, img: "images/sensors/zmpt101b.jpg" },
  { code: "059", name: "ACS712 5A Current Sensor", category: "Sensors Modules", price: 120, img: "images/sensors/acs712-5a.jpg" },
  { code: "060", name: "BH1750 Light Sensor", category: "Sensors Modules", price: 130, img: "images/sensors/bh1750.jpg" },
  { code: "061", name: "ACS712 10A Current Sensor", category: "Sensors Modules", price: 135, img: "images/sensors/acs712-10a.jpg" },
  { code: "062", name: "ACS712 20A Current Sensor", category: "Sensors Modules", price: 150, img: "images/sensors/acs712-20a.jpg" },
  { code: "063", name: "Thermistor Module", category: "Sensors Modules", price: 50, img: "images/sensors/thermistor.jpg" },
  { code: "064", name: "ACS712 30A Current Sensor", category: "Sensors Modules", price: 160, img: "images/sensors/acs712-30a.jpg" },
  { code: "065", name: "DS18B20 Temperature Module", category: "Sensors Modules", price: 110, img: "images/sensors/ds18b20.jpg" },
  { code: "066", name: "GY-21 HTU21 Humidity Sensor", category: "Sensors Modules", price: 350, img: "images/sensors/gy21-htu21.jpg" },
  { code: "067", name: "DS18B20 Waterproof Sensor", category: "Sensors Modules", price: 115, img: "images/sensors/ds18b20-waterproof.jpg" },
  { code: "068", name: "Hall Effect Sensor Module", category: "Sensors Modules", price: 85, img: "images/sensors/hall-effect.jpg" },
  { code: "069", name: "Water Level Sensor", category: "Sensors Modules", price: 50, img: "images/sensors/water-level.jpg" },
  { code: "070", name: "AS608 Fingerprint Sensor", category: "Sensors Modules", price: 1020, img: "images/sensors/as608.jpg" },
  { code: "071", name: "Tilt Sensor", category: "Sensors Modules", price: 80, img: "images/sensors/tilt.jpg" },
  { code: "072", name: "1 Channel Touch Sensor", category: "Sensors Modules", price: 65, img: "images/sensors/touch-1ch.jpg" },
  { code: "073", name: "4 Channel Touch Sensor", category: "Sensors Modules", price: 130, img: "images/sensors/touch-4ch.jpg" },
  { code: "074", name: "Joystick Module", category: "Sensors Modules", price: 70, img: "images/sensors/joystick.jpg" },
  { code: "075", name: "Micro SD Card Reader Module", category: "Sensors Modules", price: 80, img: "images/sensors/micro-sd.jpg" },

 // -----------------------------
  // Motors
  // -----------------------------
  { code: "101", name: "775 Motor 12V DC (Local)", category: "Motors", price: 220, img: "images/motors/775-local.jpg" },
  { code: "102", name: "775 Motor 12V DC", category: "Motors", price: 400, img: "images/motors/775-dc.jpg" },
  { code: "103", name: "Dynamo Motor", category: "Motors", price: 90, img: "images/motors/dynamo.jpg" },
  { code: "104", name: "6V Water Pump", category: "Motors", price: 50, img: "images/motors/6v-pump.jpg" },
  { code: "105", name: "555 Motor 12V DC", category: "Motors", price: 150, img: "images/motors/555-dc.jpg" },
  { code: "106", name: "12V Powerful Water Pump", category: "Motors", price: 450, img: "images/motors/12v-pump.jpg" },
  { code: "107", name: "5V Stepper Motor", category: "Motors", price: 120, img: "images/motors/stepper-5v.jpg" },
  { code: "108", name: "SG90 Servo Motor", category: "Motors", price: 95, img: "images/motors/sg90.jpg" },
  { code: "109", name: "MG90 Servo Motor", category: "Motors", price: 210, img: "images/motors/mg90.jpg" },
  { code: "110", name: "Toy Motor", category: "Motors", price: 12, img: "images/motors/toy.jpg" },
  { code: "111", name: "MG995 Servo Motor", category: "Motors", price: 350, img: "images/motors/mg995.jpg" },
  { code: "112", name: "BO Motor Double Shaft", category: "Motors", price: 62, img: "images/motors/bo-double.jpg" },
  { code: "113", name: "BO Motor Single Shaft", category: "Motors", price: 62, img: "images/motors/bo-single.jpg" },
  { code: "114", name: "Gear Motor", category: "Motors", price: 190, img: "images/motors/gear.jpg" },
  { code: "115", name: "DVD Motor", category: "Motors", price: 50, img: "images/motors/dvd.jpg" },
  { code: "116", name: "3 Inch CPU Cooling Fan 12V", category: "Motors", price: 90, img: "images/motors/cpu-fan.jpg" },
  { code: "117", name: "BLDC Motor", category: "Motors", price: 350, img: "images/motors/bldc.jpg" },

  // -----------------------------
  // 💡"Meters & Measurement Modules"
  // -----------------------------

  { code: "131", name: "3 Wire Voltmeter", category: "Meters & Measurement Modules", price: 80, img: "images/meters/3wire-voltmeter.jpg" },
  { code: "132", name: "2 Wire Voltmeter (Red)", category: "Meters & Measurement Modules", price: 70, img: "images/meters/2wire-voltmeter-red.jpg" },
  { code: "133", name: "Lead Acid Battery Meter", category: "Meters & Measurement Modules", price: 130, img: "images/meters/battery-meter.jpg" },
  { code: "134", name: "Voltmeter Ammeter Combo", category: "Meters & Measurement Modules", price: 200, img: "images/meters/voltmeter-ammeter.jpg" },
  { code: "135", name: "Multimeter Probe (High Quality)", category: "Meters & Measurement Modules", price: 110, img: "images/meters/multimeter-probe.jpg" },
  { code: "136", name: "Digital Multimeter", category: "Meters & Measurement Modules", price: 160, img: "images/meters/multimeter.jpg" },
  { code: "137", name: "W1209 Temperature Controller", category: "Meters & Measurement Modules", price: 150, img: "images/meters/w1209.jpg" },
  { code: "138", name: "Thermometer TPM-10", category: "Meters & Measurement Modules", price: 110, img: "images/meters/tpm10.jpg" },
  { code: "139", name: "5V Timer Relay Module", category: "Meters & Measurement Modules", price: 160, img: "images/meters/5v-timer-relay.jpg" },
  { code: "140", name: "2 Wire Voltmeter (Red, 0.56 inch)", category: "Meters & Measurement Modules", price: 120, img: "images/meters/2wire-voltmeter-056.jpg" },

   // -----------------------------
  //Relays
  // -----------------------------
    { code: "151", name: "2 Channel Opto Relay Module (5V)", category: "Relay Modules", price: 90, img: "images/relays/2ch-opto.jpg" },
  { code: "152", name: "8 Channel Opto Relay Module (5V)", category: "Relay Modules", price: 310, img: "images/relays/8ch-opto.jpg" },
  { code: "153", name: "1 Channel Relay Module (5V)", category: "Relay Modules", price: 60, img: "images/relays/1ch.jpg" },
  { code: "154", name: "4 Channel Opto Relay Module (5V)", category: "Relay Modules", price: 190, img: "images/relays/4ch-opto.jpg" },
  { code: "155", name: "16 Channel Opto Relay Module (5V)", category: "Relay Modules", price: 600, img: "images/relays/16ch-opto.jpg" },
  { code: "156", name: "5V Sugar Cube SPST Relay (10A)", category: "Relay Modules", price: 20, img: "images/relays/5v-sugarcube-10a.jpg" },
  { code: "157", name: "5V Sugar Cube SPST Relay (7A)", category: "Relay Modules", price: 15, img: "images/relays/5v-sugarcube-7a.jpg" },
  { code: "158", name: "12V SPDT Relay (30A)", category: "Relay Modules", price: 70, img: "images/relays/12v-spdt-30a.jpg" },
  { code: "159", name: "12V Sugar Cube SPST Relay (15A)", category: "Relay Modules", price: 60, img: "images/relays/12v-sugarcube-15a.jpg" },

  // -----------------------------
  //Power Boards 
  // -----------------------------

    { code: "171", name: "LM2596 Buck Converter", category: "Power Boards & Voltage Regulators", price: 75, img: "images/power/lm2596-buck.jpg" },
  { code: "172", name: "XL6009 Boost Converter", category: "Power Boards & Voltage Regulators", price: 80, img: "images/power/xl6009-boost.jpg" },
  { code: "173", name: "MT3608 Boost Converter", category: "Power Boards & Voltage Regulators", price: 50, img: "images/power/mt3608-boost.jpg" },
  { code: "174", name: "XL4015 5A DC-DC Buck Converter", category: "Power Boards & Voltage Regulators", price: 170, img: "images/power/xl4015-buck.jpg" },
  { code: "175", name: "MB102 Breadboard Power Supply Module", category: "Power Boards & Voltage Regulators", price: 120, img: "images/power/mb102-breadboard.jpg" },
  { code: "176", name: "LM317 Voltage Regulator Module", category: "Power Boards & Voltage Regulators", price: 100, img: "images/power/lm317.jpg" },
  { code: "177", name: "XL4015 5A Constant Voltage & Current Module", category: "Power Boards & Voltage Regulators", price: 250, img: "images/power/xl4015-constant.jpg" },
  { code: "178", name: "150W DC-DC Boost Converter", category: "Power Boards & Voltage Regulators", price: 250, img: "images/power/150w-boost.jpg" },
  { code: "179", name: "LM2596 Buck Converter with Display", category: "Power Boards & Voltage Regulators", price: 190, img: "images/power/lm2596-display.jpg" },
  { code: "180", name: "400KV Step Up Module", category: "Power Boards & Voltage Regulators", price: 270, img: "images/power/400kv-stepup.jpg" },
  { code: "181", name: "360 Buck Converter", category: "Power Boards & Voltage Regulators", price: 110, img: "images/power/360-buck.jpg" },
  { code: "182", name: "TC4056 Type-C Charging Board", category: "Power Boards & Voltage Regulators", price: 30, img: "images/power/tc4056-typec.jpg" },
  { code: "183", name: "TC4056 Micro-B Charging Board", category: "Power Boards & Voltage Regulators", price: 28, img: "images/power/tc4056-microb.jpg" },
  { code: "184", name: "Power Distribution Board", category: "Power Boards & Voltage Regulators", price: 50, img: "images/power/power-board.jpg" },

  // -----------------------------
  //"Wireless & Communication Modules"
  // -----------------------------
    { code: "191", name: "ESP32 Camera Module", category: "Wireless & Communication Modules", price: 550, img: "images/wireless/esp32-cam.jpg" },
  { code: "192", name: "ESP32-CAM Programmer", category: "Wireless & Communication Modules", price: 250, img: "images/wireless/esp32-cam-programmer.jpg" },
  { code: "193", name: "Wi-Fi Board D1 (NodeMCU Compatible)", category: "Wireless & Communication Modules", price: 350, img: "images/wireless/d1-wifi.jpg" },
  { code: "194", name: "SIM800L GSM Module", category: "Wireless & Communication Modules", price: 330, img: "images/wireless/sim800l.jpg" },
  { code: "195", name: "HC-12 Wireless Transceiver Module", category: "Wireless & Communication Modules", price: 350, img: "images/wireless/hc12.jpg" },
  { code: "196", name: "NRF24L01 Long Range Module", category: "Wireless & Communication Modules", price: 220, img: "images/wireless/nrf24l01-long.jpg" },
  { code: "197", name: "NRF24L01 Short Range Module", category: "Wireless & Communication Modules", price: 100, img: "images/wireless/nrf24l01-short.jpg" },
  { code: "198", name: "RC522 RFID Scanner", category: "Wireless & Communication Modules", price: 150, img: "images/wireless/rc522.jpg" },
  { code: "199", name: "RFID Card 125 KHz", category: "Wireless & Communication Modules", price: 20, img: "images/wireless/rfid-card-125.jpg" },
  { code: "200", name: "RFID Card 13.56 MHz", category: "Wireless & Communication Modules", price: 20, img: "images/wireless/rfid-card-1356.jpg" },
  { code: "201", name: "PN532 NFC RFID Scanner", category: "Wireless & Communication Modules", price: 400, img: "images/wireless/pn532.jpg" },
  { code: "202", name: "Bluetooth Audio Receiver", category: "Wireless & Communication Modules", price: 50, img: "images/wireless/bluetooth-audio.jpg" },
  { code: "203", name: "RF Module 433 MHz", category: "Wireless & Communication Modules", price: 110, img: "images/wireless/rf433.jpg" },
  { code: "204", name: "HC-05 Bluetooth Module", category: "Wireless & Communication Modules", price: 250, img: "images/wireless/hc05.jpg" },
  { code: "205", name: "GSM SIM800A Module", category: "Wireless & Communication Modules", price: 999, img: "images/wireless/sim800a.jpg" },
  { code: "206", name: "GSM SIM900A Module", category: "Wireless & Communication Modules", price: 999, img: "images/wireless/sim900a.jpg" },
  { code: "207", name: "27 MHz 4-Channel Remote Control", category: "Wireless & Communication Modules", price: 170, img: "images/wireless/27mhz-remote.jpg" },
  { code: "208", name: "LoRa SX1278 Module", category: "Wireless & Communication Modules", price: 430, img: "images/wireless/lora-sx1278.jpg" },
    
   // -----------------------------
  // Motor Drivers & Speed Controllers
  // -----------------------------
    { code: "231", name: "L298N Motor Driver", category: "Motor Drivers & Speed Controllers", price: 160, img: "images/drivers/l298n.jpg" },
  { code: "232", name: "Servo Tester", category: "Motor Drivers & Speed Controllers", price: 130, img: "images/drivers/servo-tester.jpg" },
  { code: "233", name: "2A DC PWM Speed Controller", category: "Motor Drivers & Speed Controllers", price: 100, img: "images/drivers/pwm-2a.jpg" },
  { code: "234", name: "5A DC PWM Speed Controller", category: "Motor Drivers & Speed Controllers", price: 150, img: "images/drivers/pwm-5a.jpg" },
  { code: "235", name: "2000W SCR Motor Speed Controller", category: "Motor Drivers & Speed Controllers", price: 400, img: "images/drivers/scr-2000w.jpg" },
  { code: "236", name: "PWM 3A Speed Controller", category: "Motor Drivers & Speed Controllers", price: 130, img: "images/drivers/pwm-3a.jpg" },
  { code: "237", name: "L293D Motor Driver Shield", category: "Motor Drivers & Speed Controllers", price: 160, img: "images/drivers/l293d-shield.jpg" },
  { code: "238", name: "TB6600 Stepper Motor Driver", category: "Motor Drivers & Speed Controllers", price: 550, img: "images/drivers/tb6600.jpg" },
  { code: "239", name: "L293 Motor Driver", category: "Motor Drivers & Speed Controllers", price: 90, img: "images/drivers/l293.jpg" },

// ===============================
//Display Modules
// ===============================
  { code: "251", name: "16x2 LCD (Green, Without I2C)", category: "Display Modules", price: 90, img: "images/displays/lcd-16x2-green.jpg" },
  { code: "252", name: "16x2 LCD with I2C (Green)", category: "Display Modules", price: 180, img: "images/displays/lcd-16x2-i2c.jpg" },
  { code: "253", name: "0.96 Inch OLED Display", category: "Display Modules", price: 220, img: "images/displays/oled-096.jpg" },
  { code: "254", name: "20x4 LCD (Green)", category: "Display Modules", price: 375, img: "images/displays/lcd-20x4-green.jpg" },
  { code: "255", name: "LCD I2C Adapter Module", category: "Display Modules", price: 70, img: "images/displays/lcd-i2c-module.jpg" },
  { code: "256", name: "7 Segment Display Red (Common Anode)", category: "Display Modules", price: 18, img: "images/displays/7segment-ca.jpg" },
  { code: "257", name: "Traffic Light Module", category: "Display Modules", price: 60, img: "images/displays/traffic-light.jpg" },
  { code: "258", name: "7 Segment Display Red (Common Cathode)", category: "Display Modules", price: 18, img: "images/displays/7segment-cc.jpg" }


];

//................................................
function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("search-results");
  const categoryContainer = document.getElementById("category-container");

  resultsContainer.innerHTML = "";

  if (input === "") {
    categoryContainer.style.display = "flex";
    resultsContainer.style.display = "none";
    return;
  }

  categoryContainer.style.display = "none";
  resultsContainer.style.display = "flex";



  const filtered = allProducts.filter(p => p.name.toLowerCase().includes(input));

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `<p class="text-center text-muted">No products found 😔</p>`;
    return;
  }

  filtered.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
    col.innerHTML = `
      <div class="card h-100 bg-dark border-secondary text-light">
        <img src="${p.img}" class="card-img-top" alt="${p.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">Code: ${p.code}</p>
          <p class="card-text text-info fw-bold">₹${p.price}</p>
          <button class="btn btn-outline-info btn-sm me-2" onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
          <button class="btn btn-info btn-sm" onclick='buyNow(${JSON.stringify(p)})'>Buy Now</button>
        </div>
      </div>
    `;
    resultsContainer.appendChild(col);
  });
}

// 🛒 --- Cart Functions (copied from product.js) ---
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.code === product.code);
  if (existing) {
    existing.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

// 🔥 Buy Now Function (for direct checkout)
function buyNow(product) {
  // Save only this one product to localStorage as cart
  const singleCart = [{ ...product, quantity: 1 }];
  localStorage.setItem("cart", JSON.stringify(singleCart));
  
  // Redirect to checkout page
  window.location.href = "checkout.html";
}
