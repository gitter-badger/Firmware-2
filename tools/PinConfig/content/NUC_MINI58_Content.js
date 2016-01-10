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
	'NC', 'P1.5', 'nRESET', 'P3.0', 'AVSS', 'P5.4', 'P3.1', 'P3.2', 'P3.4', 'P3.5',
	'NC', 'NC',
	'NC', 'P3.6', 'P5.1', 'P5.0', 'VSS', 'LDO_CAP', 'P5.5', 'P5.2', 'NC', 'P2.2',
	'P2.3', 'P2.4',
	'P2.5', 'P2.6', 'NC', 'NC', 'P4.6', 'P4.7', 'NC', 'P0.7', 'P0.6', 'P0.5',
	'P0.4', 'NC',
	'P0.1', 'P0.0', 'NC', 'NC', 'P5.3', 'VDD', 'AVDD', 'P1.0', 'P1.2', 'P1.3',
	'P1.4', 'NC'
	],
	"QFN33": [
	'P1.5', 'nRESET', 'P3.0', 'P5.4', 'P3.1', 'P3.2', 'P3.4', 'P3.5',
	'P3.6', 'P5.1', 'P5.0', 'VSS', 'P5.2', 'P2.2', 'P2.3', 'P2.4',
	'P2.5', 'P2.6', 'P4.6', 'P4.7', 'P0.7', 'P0.6', 'P0.5', 'P0.4',
	'P0.1', 'P0.0', 'P5.3', 'VDD', 'P1.0', 'P1.2', 'P1.3', 'P1.4'
	],
	"TSSOP20": [
	'P1.2', 'P1.3', 'P1.4', 'P1.5', 'nRESET',
	'P3.2', 'P3.4', 'P3.5', 'P5.1', 'P5.0',
	'VSS', 'P2.4', 'P2.5', 'P4.6', 'P4.7',
	'P0.7', 'P0.6', 'P0.5', 'P0.4', 'VDD'
	]
};

NUTOOL_PIN.g_cfg_gpios = [
{ f: ['P0.0:0', 'UART0_nCTS:2', 'UART0_TXD:3'] },
{ f: ['P0.1:0', 'SPI0_SS:1', 'UART0_nRTS:2', 'UART0_RXD:3'] },
{ f: ['P0.2:0'] },
{ f: ['P0.3:0'] },
{ f: ['P0.4:0', 'SPI0_SS:2', 'PWM0_CH5:3'] },
{ f: ['P0.5:0', 'SPI0_MOSI:2', 'PWM0_CH4:3'] },
{ f: ['P0.6:0', 'SPI0_MISO:2', 'PWM0_CH1:3'] },
{ f: ['P0.7:0', 'SPI0_CLK:2', 'PWM0_CH0:3'] },

{ f: ['P1.0:0', 'ADC_CH1:1', 'ACMP0_P1:3'] },
{ f: ['P1.1:0'] },
{ f: ['P1.2:0', 'ADC_CH2:1', 'UART0_RXD:2', 'ACMP0_P2:3', 'PWM0_CH0:4'] },
{ f: ['P1.3:0', 'ADC_CH3:1', 'UART0_TXD:2', 'ACMP0_P3:3', 'PWM0_CH1:4'] },
{ f: ['P1.4:0', 'ADC_CH4:1', 'UART1_RXD:2', 'ACMP0_N:3', 'PWM0_CH4:4'] },
{ f: ['P1.5:0', 'ADC_CH5:1', 'UART1_TXD:2', 'ACMP0_P0:3'] },
{ f: ['P1.6:0'] },
{ f: ['P1.7:0'] },

{ f: ['P2.0:0'] },
{ f: ['P2.1:0'] },
{ f: ['P2.2:0', 'PWM0_CH0:2', 'I2C1_SCL:3'] },
{ f: ['P2.3:0', 'PWM0_CH1:2', 'I2C1_SDA:3'] },
{ f: ['P2.4:0', 'UART1_RXD:1', 'PWM0_CH2:2'] },
{ f: ['P2.5:0', 'UART1_TXD:1', 'PWM0_CH3:2'] },
{ f: ['P2.6:0', 'PWM0_CH4:2', 'ACMP1_O:3'] },
{ f: ['P2.7:0'] },

{ f: ['P3.0:0', 'ACMP1_N:2', 'ADC_CH6:3'] },
{ f: ['P3.1:0', 'ACMP1_P0:2', 'ADC_CH7:3'] },
{ f: ['P3.2:0', 'INT0:1', 'TM0_EXT:2', 'STADC:3', 'ACMP1_P1:4'] },
{ f: ['P3.3:0'] },
{ f: ['P3.4:0', 'TM0_CNT_OUT:1', 'I2C0_SDA:2', 'ACMP1_P2:3'] },
{ f: ['P3.5:0', 'TM1_CNT_OUT:1', 'I2C0_SCL:2', 'ACMP1_P3:3'] },
{ f: ['P3.6:0', 'TM1_EXT:1', 'CLKO:2', 'ACMP0_O:3'] },
{ f: ['P3.7:0'] },

{ f: ['P4.0:0'] },
{ f: ['P4.1:0'] },
{ f: ['P4.2:0'] },
{ f: ['P4.3:0'] },
{ f: ['P4.4:0'] },
{ f: ['P4.5:0'] },
{ f: ['P4.6:0', 'ICE_CLK:1', 'UART1_RXD:2'] },
{ f: ['P4.7:0', 'ICE_DAT:1', 'UART1_TXD:2'] },

{ f: ['P5.0:0', 'XT1_IN:1', 'I2C1_SDA:2', 'UART0_TXD:3'] },
{ f: ['P5.1:0', 'XT1_OUT:1', 'I2C1_SCL:2', 'UART0_RXD:3'] },
{ f: ['P5.2:0', 'INT1:1'] },
{ f: ['P5.3:0', 'ADC_CH0:1'] },
{ f: ['P5.4:0'] },
{ f: ['P5.5:0'] },
{ f: ['P5.6:0'] },
{ f: ['P5.7:0'] }
];

NUTOOL_PIN.g_cfg_gpiosDefines = [
{ f: ['P0.0', 'UART0_nCTS:SYS_MFP_P00_UART0_nCTS@P0_MFP', 'UART0_TXD:SYS_MFP_P00_UART0_TXD@P0_MFP'] },
{ f: ['P0.1', 'SPI0_SS:SYS_MFP_P01_SPI0_SS@P0_MFP', 'UART0_nRTS:SYS_MFP_P01_UART0_nRTS@P0_MFP', 'UART0_RXD:SYS_MFP_P01_UART0_RXD@P0_MFP'] },
{ f: ['P0.2'] },
{ f: ['P0.3'] },
{ f: ['P0.4', 'SPI0_SS:SYS_MFP_P04_SPI0_SS@P0_MFP', 'PWM0_CH5:SYS_MFP_P04_PWM0_CH5@P0_MFP'] },
{ f: ['P0.5', 'SPI0_MOSI:SYS_MFP_P05_SPI0_MOSI@P0_MFP', 'PWM0_CH4:SYS_MFP_P05_PWM0_CH4@P0_MFP'] },
{ f: ['P0.6', 'SPI0_MISO:SYS_MFP_P06_SPI0_MISO@P0_MFP', 'PWM0_CH1:SYS_MFP_P06_PWM0_CH1@P0_MFP'] },
{ f: ['P0.7', 'SPI0_CLK:SYS_MFP_P07_SPI0_CLK@P0_MFP', 'PWM0_CH0:SYS_MFP_P07_PWM0_CH0@P0_MFP'] },

{ f: ['P1.0', 'ADC_CH1:SYS_MFP_P10_ADC_CH1@P1_MFP', 'ACMP0_P1:SYS_MFP_P10_ACMP0_P1@P1_MFP'] },
{ f: ['P1.1'] },
{ f: ['P1.2', 'ADC_CH2:SYS_MFP_P12_ADC_CH2@P1_MFP', 'UART0_RXD:SYS_MFP_P12_UART0_RXD@P1_MFP', 'ACMP0_P2:SYS_MFP_P12_ACMP0_P2@P1_MFP', 'PWM0_CH0:SYS_MFP_P12_PWM0_CH0@P1_MFP'] },
{ f: ['P1.3', 'ADC_CH3:SYS_MFP_P13_ADC_CH3@P1_MFP', 'UART0_TXD:SYS_MFP_P13_UART0_TXD@P1_MFP', 'ACMP0_P3:SYS_MFP_P13_ACMP0_P3@P1_MFP', 'PWM0_CH1:SYS_MFP_P13_PWM0_CH1@P1_MFP'] },
{ f: ['P1.4', 'ADC_CH4:SYS_MFP_P14_ADC_CH4@P1_MFP', 'UART1_RXD:SYS_MFP_P14_UART1_RXD@P1_MFP', 'ACMP0_N:SYS_MFP_P14_ACMP0_N@P1_MFP', 'PWM0_CH4:SYS_MFP_P14_PWM0_CH4@P1_MFP'] },
{ f: ['P1.5', 'ADC_CH5:SYS_MFP_P15_ADC_CH5@P1_MFP', 'UART1_TXD:SYS_MFP_P15_UART1_TXD@P1_MFP', 'ACMP0_P0:SYS_MFP_P15_ACMP0_P0@P1_MFP'] },
{ f: ['P1.6'] },
{ f: ['P1.7'] },

{ f: ['P2.0'] },
{ f: ['P2.1'] },
{ f: ['P2.2', 'PWM0_CH0:SYS_MFP_P22_PWM0_CH0@P2_MFP', 'I2C1_SCL:SYS_MFP_P22_I2C1_SCL@P2_MFP'] },
{ f: ['P2.3', 'PWM0_CH1:SYS_MFP_P23_PWM0_CH1@P2_MFP', 'I2C1_SDA:SYS_MFP_P23_I2C1_SDA@P2_MFP'] },
{ f: ['P2.4', 'UART1_RXD:SYS_MFP_P24_UART1_RXD@P2_MFP', 'PWM0_CH2:SYS_MFP_P24_PWM0_CH2@P2_MFP'] },
{ f: ['P2.5', 'UART1_TXD:SYS_MFP_P25_UART1_TXD@P2_MFP', 'PWM0_CH3:SYS_MFP_P25_PWM0_CH3@P2_MFP'] },
{ f: ['P2.6', 'PWM0_CH4:SYS_MFP_P26_PWM0_CH4@P2_MFP', 'ACMP1_O:SYS_MFP_P26_ACMP1_O@P2_MFP'] },
{ f: ['P2.7'] },

{ f: ['P3.0', 'ACMP1_N:SYS_MFP_P30_ACMP1_N@P3_MFP', 'ADC_CH6:SYS_MFP_P30_ADC_CH6@P3_MFP'] },
{ f: ['P3.1', 'ACMP1_P0:SYS_MFP_P31_ACMP1_P0@P3_MFP', 'ADC_CH7:SYS_MFP_P31_ADC_CH7@P3_MFP'] },
{ f: ['P3.2', 'INT0:SYS_MFP_P32_INT0@P3_MFP', 'TM0_EXT:SYS_MFP_P32_TM0_EXT@P3_MFP', 'STADC:SYS_MFP_P32_STADC@P3_MFP', 'ACMP1_P1:SYS_MFP_P32_ACMP1_P1@P3_MFP'] },
{ f: ['P3.3'] },
{ f: ['P3.4', 'TM0_CNT_OUT:SYS_MFP_P34_TM0_CNT_OUT@P3_MFP', 'I2C0_SDA:SYS_MFP_P34_I2C0_SDA@P3_MFP', 'ACMP1_P2:SYS_MFP_P34_ACMP1_P2@P3_MFP'] },
{ f: ['P3.5', 'TM1_CNT_OUT:SYS_MFP_P35_TM1_CNT_OUT@P3_MFP', 'I2C0_SCL:SYS_MFP_P35_I2C0_SCL@P3_MFP', 'ACMP1_P3:SYS_MFP_P35_ACMP1_P3@P3_MFP'] },
{ f: ['P3.6', 'TM1_EXT:SYS_MFP_P36_TM1_EXT@P3_MFP', 'CLKO:SYS_MFP_P36_CLKO@P3_MFP', 'ACMP0_O:SYS_MFP_P36_ACMP0_O@P3_MFP'] },
{ f: ['P3.7'] },

{ f: ['P4.0'] },
{ f: ['P4.1'] },
{ f: ['P4.2'] },
{ f: ['P4.3'] },
{ f: ['P4.4'] },
{ f: ['P4.5'] },
{ f: ['P4.6', 'ICE_CLK:SYS_MFP_P46_ICE_CLK@P4_MFP', 'UART1_RXD:SYS_MFP_P46_UART1_RXD@P4_MFP'] },
{ f: ['P4.7', 'ICE_DAT:SYS_MFP_P47_ICE_DAT@P4_MFP', 'UART1_TXD:SYS_MFP_P47_UART1_TXD@P4_MFP'] },

{ f: ['P5.0', 'XT1_IN:SYS_MFP_P50_XT1_IN@P5_MFP', 'I2C1_SDA:SYS_MFP_P50_I2C1_SDA@P5_MFP', 'UART0_TXD:SYS_MFP_P50_UART0_TXD@P5_MFP'] },
{ f: ['P5.1', 'XT1_OUT:SYS_MFP_P51_XT1_OUT@P5_MFP', 'I2C1_SCL:SYS_MFP_P51_I2C1_SCL@P5_MFP', 'UART0_RXD:SYS_MFP_P51_UART0_RXD@P5_MFP'] },
{ f: ['P5.2', 'INT1:SYS_MFP_P52_INT1@P5_MFP'] },
{ f: ['P5.3', 'ADC_CH0:SYS_MFP_P53_ADC_CH0@P5_MFP'] },
{ f: ['P5.4'] },
{ f: ['P5.5'] },
{ f: ['P5.6'] },
{ f: ['P5.7'] }
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
'ACMP0_N:Analog comparator negative input pin',
'ACMP0_O:Analog comparator output pin',
'ACMP0_P0:Analog comparator positive input pin',
'ACMP0_P1:Analog comparator positive input pin',
'ACMP0_P2:Analog comparator positive input pin',
'ACMP0_P3:Analog comparator positive input pin',
'ACMP1_N:Analog comparator negative input pin',
'ACMP1_O:Analog comparator output pin',
'ACMP1_P0:Analog comparator positive input pin',
'ACMP1_P1:Analog comparator positive input pin',
'ACMP1_P2:Analog comparator positive input pin',
'ACMP1_P3:Analog comparator positive input pin',

'ADC_CH0:ADC analog input pin',
'ADC_CH1:ADC analog input pin',
'ADC_CH2:ADC analog input pin',
'ADC_CH3:ADC analog input pin',
'ADC_CH4:ADC analog input pin',
'ADC_CH5:ADC analog input pin',
'ADC_CH6:ADC analog input pin',
'ADC_CH7:ADC analog input pin',

'AVDD:Power supply for analog circuit',
'AVSS:Ground pin for analog circuit',

'CLKO:Frequency divider output pin',

'I2C0_SCL:I2C0 clock I/O pin',
'I2C0_SDA:I2C0 data I/O pin',
'I2C1_SCL:I2C1 clock I/O pin',
'I2C1_SDA:I2C1 data I/O pin',

'ICE_CLK:Serial wired debugger clock pin',
'ICE_DAT:Serial wired debugger data pin',

'INT0:External interrupt 0 input pin',
'INT1:External interrupt 1 input pin',

'LDO_CAP:LDO output pin',

'NC:Not connected',

'nRESET:The Schmitt trigger input pin for hardware device reset. A ¡§Low¡¨ on this pin for 768 clock counter of Internal RC 22.1184 MHz while the system clock is running will reset the device. nRESET pin has an internal pull-up resistor allowing power-on reset by simply connecting an external capacitor to GND.',

'PWM0_CH0:PWM0 output of PWM unit',
'PWM0_CH1:PWM1 output of PWM unit',
'PWM0_CH2:PWM2 output of PWM unit',
'PWM0_CH3:PWM3 output of PWM unit',
'PWM0_CH4:PWM4 output of PWM unit',
'PWM0_CH5:PWM5 output of PWM unit',

'SPI0_CLK:SPI serial clock pin',
'SPI0_MISO:SPI MISO (master in/slave out) pin',
'SPI0_MOSI:SPI MOSI (master out/slave in) pin',
'SPI0_SS:SPI slave select pin',

'STADC:ADC external trigger input pin',

'TM0_CNT_OUT:Timer 0 external event counter input pin / toggle output pin',
'TM0_EXT:Timer 0 external capture / reset trigger input pin / toggle output pin',
'TM1_CNT_OUT:Timer 1 external event counter input pin / toggle output pin',
'TM1_EXT:Timer 1 external capture / reset trigger input pin / toggle output pin',

'UAR0_TXD:UART0 transmitter output pin',
'UART0_nCTS:UART0 CTS pin',
'UART0_nRTS:UART0 RTS pin',
'UART0_RXD:UART0 data receiver input pin',
'UART0_TXD:UART0 transmitter output pin',
'UART1_RXD:UART1 data receiver input pin',
'UART1_TXD:UART1 transmitter output pin',

'VDD:Power supply for digital circuit',
'VSS:Ground pin for digital circuit',

'XT1_IN:The input pin to the internal inverting amplifier. The system clock could be from external crystal or resonator.',
'XT1_OUT:The output pin from the internal inverting amplifier. It emits the inverted signal of XT1_IN.'
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

{ f: ['P1.0', 'P1_MFP[0]:0', 'P1_MFP[8]:1'] },
{ f: ['P1.1'] },
{ f: ['P1.2', 'P1_MFP[2]:0', 'P1_MFP[10]:1', 'P1_MFP[26]:2'] },
{ f: ['P1.3', 'P1_MFP[3]:0', 'P1_MFP[11]:1', 'P1_MFP[27]:2'] },
{ f: ['P1.4', 'P1_MFP[4]:0', 'P1_MFP[12]:1', 'P1_MFP[28]:2'] },
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
{ f: ['P3.2', 'P3_MFP[2]:0', 'P3_MFP[10]:1', 'P3_MFP[26]:2'] },
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
{ f: ['P4.6', 'P4_MFP[6]:0', 'P4_MFP[14]:1'] },
{ f: ['P4.7', 'P4_MFP[7]:0', 'P4_MFP[15]:1'] },

{ f: ['P5.0', 'P5_MFP[0]:0', 'P5_MFP[8]:1'] },
{ f: ['P5.1', 'P5_MFP[1]:0', 'P5_MFP[9]:1'] },
{ f: ['P5.2', 'P5_MFP[2]:0', 'P5_MFP[10]:1'] },
{ f: ['P5.3', 'P5_MFP[3]:0', 'P5_MFP[11]:1'] },
{ f: ['P5.4', 'P5_MFP[4]:0', 'P5_MFP[12]:1'] },
{ f: ['P5.5', 'P5_MFP[5]:0', 'P5_MFP[13]:1'] },
{ f: ['P5.6'] },
{ f: ['P5.7'] }
];

NUTOOL_PIN.g_cfg_shareBits = [];
NUTOOL_PIN.g_cfg_addGPIO = {};
NUTOOL_PIN.g_cfg_unusedGPIO = {
	"MINI58FDE(TSSOP20)": {
		"P1.2": ["ACMP0_P2"],
		"P1.3": ["ACMP0_P3"],
		"P1.4": ["ACMP0_N"],
		"P1.5": ["ACMP0_P0"],
		"P3.2": ["ACMP1_P1"],
		"P3.4": ["ACMP1_P2"],
		"P3.5": ["ACMP1_P3"]
	}
};

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