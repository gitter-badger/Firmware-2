// chip content
NUTOOL_PIN.g_cfg_chips = [
//MINI51AN
{ name: "MINI51LAN", pkg: "LQFP48" },
{ name: "MINI52LAN", pkg: "LQFP48" },
{ name: "MINI54LAN", pkg: "LQFP48" },

{ name: "MINI51ZAN", pkg: "QFN33" },
{ name: "MINI51TAN", pkg: "QFN33" },
{ name: "MINI52ZAN", pkg: "QFN33" },

{ name: "MINI52TAN", pkg: "QFN33" },
{ name: "MINI54ZAN", pkg: "QFN33" },
{ name: "MINI54TAN", pkg: "QFN33" },
//MINI51DE
{ name: "MINI51LDE", pkg: "LQFP48" },
{ name: "MINI52LDE", pkg: "LQFP48" },
{ name: "MINI54LDE", pkg: "LQFP48" },

{ name: "MINI51ZDE", pkg: "QFN33" },
{ name: "MINI52ZDE", pkg: "QFN33" },
{ name: "MINI54ZDE", pkg: "QFN33" },

{ name: "MINI51TDE", pkg: "QFN33" },
{ name: "MINI52TDE", pkg: "QFN33" },
{ name: "MINI54TDE", pkg: "QFN33" },

{ name: "MINI51FDE", pkg: "TSSOP20" },
{ name: "MINI52FDE", pkg: "TSSOP20" },
{ name: "MINI54FDE", pkg: "TSSOP20" },

{ name: "MINI54FHC", pkg: "TSSOP20" },
//MINI51X
{ name: "MINI51XLAE", pkg: "LQFP48" },
{ name: "MINI52XLAE", pkg: "LQFP48" },
{ name: "MINI54XLAE", pkg: "LQFP48" },

{ name: "MINI51XZAE", pkg: "QFN33" },
{ name: "MINI52XZAE", pkg: "QFN33" },
{ name: "MINI54XZAE", pkg: "QFN33" },
{ name: "MINI54XFHC", pkg: "TSSOP20" },
//MINI58
{ name: "MINI58LDE", pkg: "LQFP48" },

{ name: "MINI58ZDE", pkg: "QFN33" },
{ name: "MINI58TDE", pkg: "QFN33" },

{ name: "MINI58FDE", pkg: "TSSOP20" }
];

NUTOOL_PIN.g_cfg_pkgs = {
	"LQFP48": [
	'NC', 'P1.5', '/RESET', 'P3.0', 'AVSS', 'P5.4', 'P3.1', 'P3.2', 'P3.4', 'P3.5',
	'NC', 'NC',
	'NC', 'P3.6', 'P5.1', 'P5.0', 'VSS', 'LDO_CAP', 'P5.5', 'P5.2', 'NC', 'P2.2',
	'P2.3', 'P2.4',
	'P2.5', 'P2.6', 'NC', 'NC', 'P4.6', 'P4.7', 'NC', 'P0.7', 'P0.6', 'P0.5',
	'P0.4', 'NC',
	'P0.1', 'P0.0', 'NC', 'NC', 'P5.3', 'VDD', 'AVDD', 'P1.0', 'P1.2', 'P1.3',
	'P1.4', 'NC'
	],
	"QFN33": [
	'P1.5', '/RESET', 'P3.0', 'P5.4', 'P3.1', 'P3.2', 'P3.4', 'P3.5',
	'P3.6', 'P5.1', 'P5.0', 'VSS', 'P5.2', 'P2.2', 'P2.3', 'P2.4',
	'P2.5', 'P2.6', 'P4.6', 'P4.7', 'P0.7', 'P0.6', 'P0.5', 'P0.4',
	'P0.1', 'P0.0', 'P5.3', 'VDD', 'P1.0', 'P1.2', 'P1.3', 'P1.4'
	]
};

NUTOOL_PIN.g_cfg_gpios = [
{ f: ['P0.0:0', 'CTSn:2', 'TX:3'] },
{ f: ['P0.1:0', 'SPISS:1', 'RTSn:2', 'RX:3'] },
{ f: ['P0.2:0'] },
{ f: ['P0.3:0'] },
{ f: ['P0.4:0', 'SPISS:2', 'PWM5:3'] },
{ f: ['P0.5:0', 'MOSI:2'] },
{ f: ['P0.6:0', 'MISO:2'] },
{ f: ['P0.7:0', 'SPICLK:2'] },

{ f: ['P1.0:0', 'AIN1:1'] },
{ f: ['P1.1:0'] },
{ f: ['P1.2:0', 'AIN2:1', 'RX:2'] },
{ f: ['P1.3:0', 'AIN3:1', 'TX:2'] },
{ f: ['P1.4:0', 'AIN4:1', 'CPN0:3'] },
{ f: ['P1.5:0', 'AIN5:1', 'CPP0:3'] },
{ f: ['P1.6:0'] },
{ f: ['P1.7:0'] },

{ f: ['P2.0:0'] },
{ f: ['P2.1:0'] },
{ f: ['P2.2:0', 'PWM0:2'] },
{ f: ['P2.3:0', 'PWM1:2'] },
{ f: ['P2.4:0', 'PWM2:2'] },
{ f: ['P2.5:0', 'PWM3:2'] },
{ f: ['P2.6:0', 'PWM4:2', 'CPO1:3'] },
{ f: ['P2.7:0'] },

{ f: ['P3.0:0', 'CPN1:2', 'AIN6:3'] },
{ f: ['P3.1:0', 'CPP1:2', 'AIN7:3'] },
{ f: ['P3.2:0', 'INT0:1', 'T0EX:2', 'STADC:3'] },
{ f: ['P3.3:0'] },
{ f: ['P3.4:0', 'T0:1', 'SDA:2'] },
{ f: ['P3.5:0', 'T1:1', 'SCL:2'] },
{ f: ['P3.6:0', 'T1EX:1', 'CKO:2', 'CPO0:3'] },
{ f: ['P3.7:0'] },

{ f: ['P4.0:0'] },
{ f: ['P4.1:0'] },
{ f: ['P4.2:0'] },
{ f: ['P4.3:0'] },
{ f: ['P4.4:0'] },
{ f: ['P4.5:0'] },
{ f: ['P4.6:0', 'ICE_CLK:1'] },
{ f: ['P4.7:0', 'ICE_DAT:1'] },

{ f: ['P5.0:0', 'XTAL1:1'] },
{ f: ['P5.1:0', 'XTAL2:1'] },
{ f: ['P5.2:0', 'INT1:1'] },
{ f: ['P5.3:0', 'AIN0:1'] },
{ f: ['P5.4:0'] },
{ f: ['P5.5:0'] },
{ f: ['P5.6:0'] },
{ f: ['P5.7:0'] }
];

NUTOOL_PIN.g_cfg_gpiosDefines = [];
NUTOOL_PIN.g_cfg_gpiosDescriptions = [
'/RESET:The Schmitt trigger input pin for hardware device reset. A ��Low�� on this pin for 768 clock counter of Internal RC 22.1184 MHz while the system clock is running will reset the device. /RESET pin has an internal pull-up resistor allowing power-on reset by simply connecting an external capacitor to GND.',

'AIN0:ADC analog input pin',
'AIN1:ADC analog input pin',
'AIN2:ADC analog input pin',
'AIN3:ADC analog input pin',
'AIN4:PWM5: PWM output/Capture input',
'AIN5:ADC analog input pin',
'AIN6:ADC analog input pin',
'AIN7:ADC analog input pin',

'AVDD:Power supply for analog circuit',
'AVSS:Ground pin for analog circuit',

'CKO:Frequency divider output pin',

'CPN0:Analog comparator negative input pin',
'CPN1:Analog comparator negative input pin',
'CPO0:Analog comparator output pin',
'CPO1:Analog comparator output pin',
'CPP0:Analog comparator Positive input pin',
'CPP1:Analog comparator positive input pin',

'CTSn:UART CTS pin',

'ICE_CLK:Serial wired debugger clock pin',
'ICE_DAT:Serial wired debugger data pin',

'INT0:External interrupt 0 input pin',
'INT1:External interrupt 1 input pin',

'LDO_CAP:LDO output pin',

'MISO:SPI MISO (master in/slave out) pin',
'MOSI:SPI MOSI (master out/slave in) pin',

'NC:Not connected',

'PWM0:PWM0 output of PWM unit',
'PWM1:PWM1 output of PWM unit',
'PWM2:PWM2 output of PWM unit',
'PWM3:PWM3 output of PWM unit',
'PWM4:PWM4 output of PWM unit',
'PWM5:PWM5 output of PWM unit',

'RTSn:UART RTS pin',
'RX:UART data receiver input pin',

'SCL:I2C clock I/O pin',
'SDA:I2C data I/O pin',

'SPICLK:SPI serial clock pin',
'SPISS:SPI slave select pin',

'STADC:ADC external trigger input pin',

'T0:Timer 0 external event counter input pin',
'T0EX:Timer 0 external capture/reset trigger input pin',
'T1:Timer 1 external event counter input pin',
'T1EX:Timer 1 external capture/reset trigger input pin',
'TX:UART transmitter output pin',

'VDD:Power supply for digital circuit',
'VSS:Ground pin for digital circuit',

'XTAL1:The input pin to the internal inverting amplifier. The system clock could be from external crystal or resonator.',
'XTAL2:The output pin from the internal inverting amplifier. It emits the inverted signal of XTAL1.'
];

NUTOOL_PIN.g_cfg_gpioMatrix = [
{ f: ['P0.0', 'P0_MFP[0]:0', 'P0_MFP[8]:1'] },
{ f: ['P0.1', 'P0_MFP[1]:0', 'P0_MFP[9]:1'] },
{ f: ['P0.2'] },
{ f: ['P0.3'] },
{ f: ['P0.4', 'P0_MFP[4]:0', 'P0_MFP[12]:1'] },
{ f: ['P0.5', 'P0_MFP[5]:0', 'P0_MFP[13]:1'] },
{ f: ['P0.6', 'P0_MFP[6]:0', 'P0_MFP[14]:1'] },
{ f: ['P0.7', 'P0_MFP[7]:0', 'P0_MFP[15]:1'] },

{ f: ['P1.0', 'P1_MFP[0]:0'] },
{ f: ['P1.1'] },
{ f: ['P1.2', 'P1_MFP[2]:0', 'P1_MFP[10]:1'] },
{ f: ['P1.3', 'P1_MFP[3]:0', 'P1_MFP[11]:1'] },
{ f: ['P1.4', 'P1_MFP[4]:0', 'P1_MFP[12]:1'] },
{ f: ['P1.5', 'P1_MFP[5]:0', 'P1_MFP[13]:1'] },
{ f: ['P1.6'] },
{ f: ['P1.7'] },

{ f: ['P2.0'] },
{ f: ['P2.1'] },
{ f: ['P2.2', 'P2_MFP[2]:0', 'P2_MFP[10]:1'] },
{ f: ['P2.3', 'P2_MFP[3]:0', 'P2_MFP[11]:1'] },
{ f: ['P2.4', 'P2_MFP[4]:0', 'P2_MFP[12]:1'] },
{ f: ['P2.5', 'P2_MFP[5]:0', 'P2_MFP[13]:1'] },
{ f: ['P2.6', 'P2_MFP[6]:0', 'P2_MFP[14]:1'] },
{ f: ['P2.7'] },

{ f: ['P3.0', 'P3_MFP[0]:0', 'P3_MFP[8]:1'] },
{ f: ['P3.1', 'P3_MFP[1]:0', 'P3_MFP[9]:1'] },
{ f: ['P3.2', 'P3_MFP[2]:0', 'P3_MFP[10]:1'] },
{ f: ['P3.3'] },
{ f: ['P3.4', 'P3_MFP[4]:0', 'P3_MFP[12]:1'] },
{ f: ['P3.5', 'P3_MFP[5]:0', 'P3_MFP[13]:1'] },
{ f: ['P3.6', 'P3_MFP[6]:0', 'P3_MFP[14]:1'] },
{ f: ['P3.7'] },

{ f: ['P4.0'] },
{ f: ['P4.1'] },
{ f: ['P4.2'] },
{ f: ['P4.3'] },
{ f: ['P4.4'] },
{ f: ['P4.5'] },
{ f: ['P4.6', 'P4_MFP[6]:0'] },
{ f: ['P4.7', 'P4_MFP[7]:0'] },

{ f: ['P5.0', 'P5_MFP[0]:0'] },
{ f: ['P5.1', 'P5_MFP[1]:0'] },
{ f: ['P5.2', 'P5_MFP[2]:0'] },
{ f: ['P5.3', 'P5_MFP[3]:0'] },
{ f: ['P5.4'] },
{ f: ['P5.5'] },
{ f: ['P5.6'] },
{ f: ['P5.7'] }
];

NUTOOL_PIN.g_cfg_shareBits = [];
NUTOOL_PIN.g_cfg_addGPIO = {};
NUTOOL_PIN.g_cfg_unusedGPIO = {};

NUTOOL_PIN.decidepackageNumber = function (given_partNumber_package) {
	var partNumber_package;

	if (typeof given_partNumber_package === 'undefined') {
		partNumber_package = NUTOOL_PIN.getg_partNumber_package();
	}
	else {
		partNumber_package = given_partNumber_package;
	}

	NUTOOL_PIN.g_packageNumber = partNumber_package.substring(partNumber_package.indexOf('(') + 1);
	NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.g_packageNumber.substring(0, NUTOOL_PIN.g_packageNumber.indexOf(')'));
	NUTOOL_PIN.g_packageNumberIndex = NUTOOL_PIN.g_packageNumber;

	partNumber_package = null;
};