// chip content
NUTOOL_PIN.g_cfg_chips = [
//M051AN
{ name: "M052LAN", pkg: "LQFP48" },
{ name: "M054LAN", pkg: "LQFP48" },
{ name: "M058LAN", pkg: "LQFP48" },
{ name: "M0516LAN", pkg: "LQFP48" },

{ name: "M052ZAN", pkg: "QFN33" },
{ name: "M054ZAN", pkg: "QFN33" },
{ name: "M058ZAN", pkg: "QFN33" },
{ name: "M0516ZAN", pkg: "QFN33" },
//M051BN
{ name: "M052LBN", pkg: "LQFP48" },
{ name: "M054LBN", pkg: "LQFP48" },
{ name: "M058LBN", pkg: "LQFP48" },
{ name: "M0516LBN", pkg: "LQFP48" },

{ name: "M052ZBN", pkg: "QFN33" },
{ name: "M054ZBN", pkg: "QFN33" },
{ name: "M058ZBN", pkg: "QFN33" },
{ name: "M0516ZBN", pkg: "QFN33" },
{ name: "M052TBN", pkg: "QFN33" },
{ name: "M054TBN", pkg: "QFN33" },
{ name: "M058TBN", pkg: "QFN33" },
{ name: "M0516TBN", pkg: "QFN33" },

{ name: "M052XBN", pkg: "QFN20" },
{ name: "M054XBN", pkg: "QFN20" },
{ name: "M058XBN", pkg: "QFN20" },
{ name: "M0516XBN", pkg: "QFN20" },
{ name: "E32", pkg: "QFN20" },
//M051DN
{ name: "M052LDN", pkg: "LQFP48" },
{ name: "M054LDN", pkg: "LQFP48" },
{ name: "M058LDN", pkg: "LQFP48" },
{ name: "M0516LDN", pkg: "LQFP48" },

{ name: "M052ZDN", pkg: "QFN33" },
{ name: "M054ZDN", pkg: "QFN33" },
{ name: "M058ZDN", pkg: "QFN33" },
{ name: "M0516ZDN", pkg: "QFN33" },
{ name: "M052TDN", pkg: "QFN33" },
{ name: "M054TDN", pkg: "QFN33" },
{ name: "M058TDN", pkg: "QFN33" },
{ name: "M0516TDN", pkg: "QFN33" },
{ name: "MHC54ZDN", pkg: "QFN33" },

{ name: "M052XDN", pkg: "QFN20" },
{ name: "M054XDN", pkg: "QFN20" },
{ name: "PL054TDN", pkg: "QFN20" },
{ name: "M058XDN", pkg: "QFN20" },
{ name: "M0516XDN", pkg: "QFN20" },
//M051DE
{ name: "M052LDE", pkg: "LQFP48" },
{ name: "M054LDE", pkg: "LQFP48" },
{ name: "M058LDE", pkg: "LQFP48" },
{ name: "M0516LDE", pkg: "LQFP48" },

{ name: "M052ZDE", pkg: "QFN33" },
{ name: "M054ZDE", pkg: "QFN33" },
{ name: "M058ZDE", pkg: "QFN33" },
{ name: "M0516ZDE", pkg: "QFN33" },
{ name: "M052TDE", pkg: "QFN33" },
{ name: "M054TDE", pkg: "QFN33" },
{ name: "M058TDE", pkg: "QFN33" },
{ name: "M0516TDE", pkg: "QFN33" },
//{ name: "NUC029LAN", pkg: "LQFP48" },
//{ name: "NUC029TAN", pkg: "	QFN33" }
//M058S
{ name: "M058SLAN", pkg: "LQFP48" },
{ name: "M058SZAN", pkg: "QFN33" },
{ name: "M058SSAN", pkg: "LQFP64" },
{ name: "M058SFAN", pkg: "TSSOP20" }
];

NUTOOL_PIN.g_cfg_pkgs = {
	"LQFP64": [
	'P1.5', 'P1.6', 'P1.7', 'nRST', 'P3.0', 'AVSS', 'P5.1', 'P5.2', 'P5.3', 'P3.1',
	'P3.2', 'P3.3', 'P3.4', 'P3.5', 'P4.3', 'P3.6',
	'P3.7', 'XTAL2/P7.0', 'XTAL1/P7.1', 'VSS', 'VDD', 'LDO_CAP', 'P5.4', 'P5.5', 'P5.6', 'P5.7',
	'P2.0', 'P2.1', 'P2.2', 'P2.3', 'P2.4', 'P4.0',
	'P2.5', 'P2.6', 'P2.7', 'P4.4', 'P4.5', 'P4.6', 'P4.7', 'P6.0', 'P6.1', 'P6.2',
	'P6.3', 'P0.7', 'P0.6', 'P0.5', 'P0.4', 'P4.1',
	'P0.3', 'P0.2', 'P0.1', 'P0.0', 'VSS', 'VDD', 'AVDD', 'Vref', 'P6.6', 'P6.7',
	'P1.0', 'P1.1', 'P1.2', 'P1.3', 'P1.4', 'P4.2'
	],
	"LQFP48": [
	'P1.5', 'P1.6', 'P1.7', 'nRST', 'P3.0', 'AVSS', 'P3.1', 'P3.2', 'P3.3', 'P3.4',
	'P3.5', 'P4.3',
	'P3.6', 'P3.7', 'XTAL2/P7.0', 'XTAL1/P7.1', 'VSS', 'LDO_CAP', 'P2.0', 'P2.1', 'P2.2', 'P2.3',
	'P2.4', 'P4.0',
	'P2.5', 'P2.6', 'P2.7', 'P4.4', 'P4.5', 'P4.6', 'P4.7', 'P0.7', 'P0.6', 'P0.5',
	'P0.4', 'P4.1',
	'P0.3', 'P0.2', 'P0.1', 'P0.0', 'VDD', 'AVDD', 'P1.0', 'P1.1', 'P1.2', 'P1.3',
	'P1.4', 'P4.2'
	],
	"QFN33": [
	'P1.5', 'nRST', 'P3.0', 'AVSS', 'P3.1', 'P3.2', 'P3.4', 'P3.5',
	'P3.6', 'XTAL2/P7.0', 'XTAL1/P7.1', 'VSS', 'LDO_CAP', 'P2.2', 'P2.3', 'P2.4',
	'P2.5', 'P2.6', 'P4.6', 'P4.7', 'P0.7', 'P0.6', 'P0.5', 'P0.4',
	'P0.1', 'P0.0', 'VDD', 'AVDD', 'P1.0', 'P1.2', 'P1.3', 'P1.4'
	],
	"TSSOP20": [
	'P1.0', 'P1.4', 'nRST', 'P3.0', 'AVSS',
	'P3.1', 'P3.4', 'P3.5', 'XTAL2/P7.0', 'XTAL1/P7.1',
	'VSS', 'LDO_CAP', 'P2.3', 'P4.6', 'P4.7',
	'P0.7', 'P0.6', 'P0.5', 'VDD', 'AVDD'
	]
};

NUTOOL_PIN.g_cfg_gpios = [
{ f: ['P0.0:0'] },
{ f: ['P0.1:0'] },
{ f: ['P0.2:0', 'CTS0:2', 'TXD:3'] },
{ f: ['P0.3:0', 'RTS0:2', 'RXD:3'] },
{ f: ['P0.4:0', 'SPISS:2'] },
{ f: ['P0.5:0', 'MOSI:2'] },
{ f: ['P0.6:0', 'MISO:2'] },
{ f: ['P0.7:0', 'SPICLK:2'] },

{ f: ['P1.0:0', 'AIN0:1', 'T2:2'] },
{ f: ['P1.1:0', 'AIN1:1', 'T3:2'] },
{ f: ['P1.2:0', 'AIN2:1'] },
{ f: ['P1.3:0', 'AIN3:1'] },
{ f: ['P1.4:0', 'AIN4:1', 'SPISS:2'] },
{ f: ['P1.5:0', 'AIN5:1', 'MOSI:2'] },
{ f: ['P1.6:0', 'AIN6:1', 'MISO:2'] },
{ f: ['P1.7:0', 'AIN7:1', 'SPICLK:2'] },

{ f: ['P2.0:0', 'PWM0:2'] },
{ f: ['P2.1:0', 'PWM1:2'] },
{ f: ['P2.2:0', 'PWM2:2'] },
{ f: ['P2.3:0', 'PWM3:2'] },
{ f: ['P2.4:0'] },
{ f: ['P2.5:0'] },
{ f: ['P2.6:0'] },
{ f: ['P2.7:0'] },

{ f: ['P3.0:0', 'RXD:1'] },
{ f: ['P3.1:0', 'TXD:1'] },
{ f: ['P3.2:0', 'nINT0:1', 'T0EX:2', 'STADC:3'] },
{ f: ['P3.3:0', 'nINT1:1', 'T1EX:3'] },
{ f: ['P3.4:0', 'T0:1', 'SDA0:2'] },
{ f: ['P3.5:0', 'T1:1', 'SCL0:2', 'CKO:3'] },
{ f: ['P3.6:0', 'CKO:2'] },
{ f: ['P3.7:0'] },

{ f: ['P4.0:0', 'PWM0:1', 'T2EX:2'] },
{ f: ['P4.1:0', 'PWM1:1', 'T3EX:2'] },
{ f: ['P4.2:0', 'PWM2:1'] },
{ f: ['P4.3:0', 'PWM3:1'] },
{ f: ['P4.4:0', 'SCL1:2'] },
{ f: ['P4.5:0', 'SDA1:2'] },
{ f: ['P4.6:0', 'ICE_CLK:1'] },
{ f: ['P4.7:0', 'ICE_DAT:1'] },

{ f: ['P5.0:0'] },
{ f: ['P5.1:0', 'T1EX:1'] },
{ f: ['P5.2:0', 'SDA0:1'] },
{ f: ['P5.3:0', 'SCL0:1'] },
{ f: ['P5.4:0'] },
{ f: ['P5.5:0'] },
{ f: ['P5.6:0'] },
{ f: ['P5.7:0'] },

{ f: ['P6.0:0'] },
{ f: ['P6.1:0'] },
{ f: ['P6.2:0'] },
{ f: ['P6.3:0'] },
{ f: ['P6.4:0'] },
{ f: ['P6.5:0'] },
{ f: ['P6.6:0'] },
{ f: ['P6.7:0'] },

{ f: ['P7.0:0'] },
{ f: ['P7.1:0'] },
{ f: ['P7.2:0'] },
{ f: ['P7.3:0'] },
{ f: ['P7.4:0'] },
{ f: ['P7.5:0'] },
{ f: ['P7.6:0'] },
{ f: ['P7.7:0'] }
];

NUTOOL_PIN.g_cfg_gpiosDefines = [];
NUTOOL_PIN.g_cfg_gpiosDescriptions = [];
NUTOOL_PIN.g_cfg_gpioMatrix = [
{ f: ['P0.0', 'P0_MFP[0]:0', 'P0_MFP[8]:1'] },
{ f: ['P0.1', 'P0_MFP[1]:0', 'P0_MFP[9]:1'] },
{ f: ['P0.2', 'P0_MFP[2]:0', 'P0_MFP[10]:1'] },
{ f: ['P0.3', 'P0_MFP[3]:0', 'P0_MFP[11]:1'] },
{ f: ['P0.4', 'P0_MFP[4]:0', 'P0_MFP[12]:1'] },
{ f: ['P0.5', 'P0_MFP[5]:0', 'P0_MFP[13]:1'] },
{ f: ['P0.6', 'P0_MFP[6]:0', 'P0_MFP[14]:1'] },
{ f: ['P0.7', 'P0_MFP[7]:0', 'P0_MFP[15]:1'] },

{ f: ['P1.0', 'P1_MFP[0]:0', 'P1_MFP[8]:1'] },
{ f: ['P1.1', 'P1_MFP[1]:0', 'P1_MFP[9]:1'] },
{ f: ['P1.2', 'P1_MFP[2]:0', 'P1_MFP[10]:1'] },
{ f: ['P1.3', 'P1_MFP[3]:0', 'P1_MFP[11]:1'] },
{ f: ['P1.4', 'P1_MFP[4]:0', 'P1_MFP[12]:1'] },
{ f: ['P1.5', 'P1_MFP[5]:0', 'P1_MFP[13]:1'] },
{ f: ['P1.6', 'P1_MFP[6]:0', 'P1_MFP[14]:1'] },
{ f: ['P1.7', 'P1_MFP[7]:0', 'P1_MFP[15]:1'] },

{ f: ['P2.0', 'P2_MFP[0]:0', 'P2_MFP[8]:1'] },
{ f: ['P2.1', 'P2_MFP[1]:0', 'P2_MFP[9]:1'] },
{ f: ['P2.2', 'P2_MFP[2]:0', 'P2_MFP[10]:1'] },
{ f: ['P2.3', 'P2_MFP[3]:0', 'P2_MFP[11]:1'] },
{ f: ['P2.4', 'P2_MFP[4]:0', 'P2_MFP[12]:1'] },
{ f: ['P2.5', 'P2_MFP[5]:0', 'P2_MFP[13]:1'] },
{ f: ['P2.6', 'P2_MFP[6]:0', 'P2_MFP[14]:1'] },
{ f: ['P2.7', 'P2_MFP[7]:0', 'P2_MFP[15]:1'] },

{ f: ['P3.0', 'P3_MFP[0]:0', 'P3_MFP[8]:1'] },
{ f: ['P3.1', 'P3_MFP[1]:0', 'P3_MFP[9]:1'] },
{ f: ['P3.2', 'P3_MFP[2]:0', 'P3_MFP[10]:1'] },
{ f: ['P3.3', 'P3_MFP[3]:0', 'P3_MFP[11]:1'] },
{ f: ['P3.4', 'P3_MFP[4]:0', 'P3_MFP[12]:1'] },
{ f: ['P3.5', 'P3_MFP[5]:0', 'P3_MFP[13]:1'] },
{ f: ['P3.6', 'P3_MFP[6]:0', 'P3_MFP[14]:1'] },
{ f: ['P3.7', 'P3_MFP[7]:0', 'P3_MFP[15]:1'] },

{ f: ['P4.0', 'P4_MFP[0]:0', 'P4_MFP[8]:1'] },
{ f: ['P4.1', 'P4_MFP[1]:0', 'P4_MFP[9]:1'] },
{ f: ['P4.2', 'P4_MFP[2]:0', 'P4_MFP[10]:1'] },
{ f: ['P4.3', 'P4_MFP[3]:0', 'P4_MFP[11]:1'] },
{ f: ['P4.4', 'P4_MFP[4]:0', 'P4_MFP[12]:1'] },
{ f: ['P4.5', 'P4_MFP[5]:0', 'P4_MFP[13]:1'] },
{ f: ['P4.6', 'P4_MFP[6]:0', 'P4_MFP[14]:1'] },
{ f: ['P4.7', 'P4_MFP[7]:0', 'P4_MFP[15]:1'] },

{ f: ['P5.0'] },
{ f: ['P5.1', 'P5_MFP[1]:0', 'P5_MFP[9]:1'] },
{ f: ['P5.2', 'P5_MFP[2]:0', 'P5_MFP[10]:1'] },
{ f: ['P5.3', 'P5_MFP[3]:0', 'P5_MFP[11]:1'] },
{ f: ['P5.4'] },
{ f: ['P5.5'] },
{ f: ['P5.6'] },
{ f: ['P5.7'] },

{ f: ['P6.0'] },
{ f: ['P6.1'] },
{ f: ['P6.2'] },
{ f: ['P6.3'] },
{ f: ['P6.4'] },
{ f: ['P6.5'] },
{ f: ['P6.6'] },
{ f: ['P6.7'] },

{ f: ['P7.0'] },
{ f: ['P7.1'] },
{ f: ['P7.2'] },
{ f: ['P7.3'] },
{ f: ['P7.4'] },
{ f: ['P7.5'] },
{ f: ['P7.6'] },
{ f: ['P7.7'] }
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