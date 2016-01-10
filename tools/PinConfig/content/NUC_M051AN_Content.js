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
	"QFN33": [
	'P1.5', '/RST', 'P3.0', 'AVSS', 'P3.1', 'P3.2', 'P3.4', 'P3.5',
	'P3.6', 'XTAL2', 'XTAL1', 'VSS', 'LDO_CAP', 'P2.2', 'P2.3', 'P2.4',
	'P2.5', 'P2.6', 'P4.6', 'P4.7', 'P0.7', 'P0.6', 'P0.5', 'P0.4',
	'P0.1', 'P0.0', 'VDD', 'AVDD', 'P1.0', 'P1.2', 'P1.3', 'P1.4'
	],
	"LQFP48": [
	'P1.5', 'P1.6', 'P1.7', '/RST', 'P3.0', 'AVSS', 'P3.1', 'P3.2', 'P3.3', 'P3.4',
	'P3.5', 'P4.3',
	'P3.6', 'P3.7', 'XTAL2', 'XTAL1', 'VSS', 'LDO_CAP', 'P2.0', 'P2.1', 'P2.2', 'P2.3',
	'P2.4', 'P4.0',
	'P2.5', 'P2.6', 'P2.7', 'P4.4', 'P4.5', 'P4.6', 'P4.7', 'P0.7', 'P0.6', 'P0.5',
	'P0.4', 'P4.1',
	'P0.3', 'P0.2', 'P0.1', 'P0.0', 'VDD', 'AVDD', 'P1.0', 'P1.1', 'P1.2', 'P1.3',
	'P1.4', 'P4.2'
	]
};

NUTOOL_PIN.g_cfg_gpios = [
{ f: ['P0.0:0', 'AD0:1', 'CTS1:2'] },
{ f: ['P0.1:0', 'AD1:1', 'RTS1:2'] },
{ f: ['P0.2:0', 'AD2:1', 'CTS0:2'] },
{ f: ['P0.3:0', 'AD3:1', 'RTS0:2'] },
{ f: ['P0.4:0', 'AD4:1', 'SPISS1:2'] },
{ f: ['P0.5:0', 'AD5:1', 'MOSI_1:2'] },
{ f: ['P0.6:0', 'AD6:1', 'MISO_1:2'] },
{ f: ['P0.7:0', 'AD7:1', 'SPICLK1:2'] },

{ f: ['P1.0:0', 'AIN0:1', 'T2:2'] },
{ f: ['P1.1:0', 'AIN1:1', 'T3:2'] },
{ f: ['P1.2:0', 'AIN2:1', 'RXD1:2'] },
{ f: ['P1.3:0', 'AIN3:1', 'TXD1:2'] },
{ f: ['P1.4:0', 'AIN4:1', 'SPISS0:2'] },
{ f: ['P1.5:0', 'AIN5:1', 'MOSI_0:2'] },
{ f: ['P1.6:0', 'AIN6:1', 'MISO_0:2'] },
{ f: ['P1.7:0', 'AIN7:1', 'SPICLK0:2'] },

{ f: ['P2.0:0', 'AD8:1', 'PWM0:2'] },
{ f: ['P2.1:0', 'AD9:1', 'PWM1:2'] },
{ f: ['P2.2:0', 'AD10:1', 'PWM2:2'] },
{ f: ['P2.3:0', 'AD11:1', 'PWM3:2'] },
{ f: ['P2.4:0', 'AD12:1', 'PWM4:2'] },
{ f: ['P2.5:0', 'AD13:1', 'PWM5:2'] },
{ f: ['P2.6:0', 'AD14:1', 'PWM6:2'] },
{ f: ['P2.7:0', 'AD15:1', 'PWM7:2'] },

{ f: ['P3.0:0', 'RXD:1'] },
{ f: ['P3.1:0', 'TXD:1'] },
{ f: ['P3.2:0', 'INT0:1', 'STADC:2'] },
{ f: ['P3.3:0', 'INT1:1', 'MCLK:2'] },
{ f: ['P3.4:0', 'T0:1', 'SDA:2'] },
{ f: ['P3.5:0', 'T1:1', 'SCL:2'] },
{ f: ['P3.6:0', 'WR:1', 'CKO:2'] },
{ f: ['P3.7:0', 'RD:1'] },

{ f: ['P4.0:0', 'PWM0:1'] },
{ f: ['P4.1:0', 'PWM1:1'] },
{ f: ['P4.2:0', 'PWM2:1'] },
{ f: ['P4.3:0', 'PWM3:1'] },
{ f: ['P4.4:0', 'CS:1'] },
{ f: ['P4.5:0', 'ALE:1'] },
{ f: ['P4.6:0', 'ICE_CLK:1'] },
{ f: ['P4.7:0', 'ICE_DAT:1'] }
];

NUTOOL_PIN.g_cfg_gpiosDefines = [
{ f: ['P0.0', 'AD0:SYS_MFP_P00_AD0@P0_MFP', 'CTS1:SYS_MFP_P00_CTS1@P0_MFP', 'TXD1:SYS_MFP_P00_TXD1@P0_MFP', 'ACMP3_P:SYS_MFP_P00_ACMP3_P@P0_MFP'] },
{ f: ['P0.1', 'AD1:SYS_MFP_P01_AD1@P0_MFP', 'RTS1:SYS_MFP_P01_RTS1@P0_MFP', 'RXD1:SYS_MFP_P01_RXD1@P0_MFP', 'ACMP3_N:SYS_MFP_P01_ACMP3_N@P0_MFP'] },
{ f: ['P0.2', 'AD2:SYS_MFP_P02_AD2@P0_MFP', 'CTS0:SYS_MFP_P02_CTS0@P0_MFP', 'TXD:SYS_MFP_P02_TXD@P0_MFP'] },
{ f: ['P0.3', 'AD3:SYS_MFP_P03_AD3@P0_MFP', 'RTS0:SYS_MFP_P03_RTS0@P0_MFP', 'RXD:SYS_MFP_P03_RXD@P0_MFP'] },
{ f: ['P0.4', 'AD4:SYS_MFP_P04_AD4@P0_MFP', 'SPISS1:SYS_MFP_P04_SPISS1@P0_MFP'] },
{ f: ['P0.5', 'AD5:SYS_MFP_P05_AD5@P0_MFP', 'MOSI_1:SYS_MFP_P05_MOSI_1@P0_MFP'] },
{ f: ['P0.6', 'AD6:SYS_MFP_P06_AD6@P0_MFP', 'MISO_1:SYS_MFP_P06_MISO_1@P0_MFP'] },
{ f: ['P0.7', 'AD7:SYS_MFP_P07_AD7@P0_MFP', 'SPICLK1:SYS_MFP_P07_SPICLK1@P0_MFP'] },

{ f: ['P1.0', 'AIN0:SYS_MFP_P10_AIN0@P1_MFP', 'T2:SYS_MFP_P10_T2@P1_MFP', 'nWRL:SYS_MFP_P10_nWRL@P1_MFP'] },
{ f: ['P1.1', 'AIN1:SYS_MFP_P11_AIN1@P1_MFP', 'T3:SYS_MFP_P11_T3@P1_MFP', 'nWRH:SYS_MFP_P11_nWRH@P1_MFP'] },
{ f: ['P1.2', 'AIN2:SYS_MFP_P12_AIN2@P1_MFP', 'RXD1:SYS_MFP_P12_RXD1@P1_MFP'] },
{ f: ['P1.3', 'AIN3:SYS_MFP_P13_AIN3@P1_MFP', 'TXD1:SYS_MFP_P13_TXD1@P1_MFP'] },
{ f: ['P1.4', 'AIN4:SYS_MFP_P14_AIN4@P1_MFP', 'SPISS0:SYS_MFP_P14_SPISS0@P1_MFP', 'ACMP0_N:SYS_MFP_P14_ACMP0_N@P1_MFP'] },
{ f: ['P1.5', 'AIN5:SYS_MFP_P15_AIN5@P1_MFP', 'MOSI_0:SYS_MFP_P15_MOSI_0@P1_MFP', 'ACMP0_P:SYS_MFP_P15_ACMP0_P@P1_MFP'] },
{ f: ['P1.6', 'AIN6:SYS_MFP_P16_AIN6@P1_MFP', 'MISO_0:SYS_MFP_P16_MISO_0@P1_MFP', 'ACMP2_N:SYS_MFP_P16_ACMP2_N@P1_MFP'] },
{ f: ['P1.7', 'AIN7:SYS_MFP_P17_AIN7@P1_MFP', 'SPICLK0:SYS_MFP_P17_SPICLK0@P1_MFP', 'ACMP2_P:SYS_MFP_P17_ACMP2_P@P1_MFP'] },

{ f: ['P2.0', 'AD8:SYS_MFP_P20_AD8@P2_MFP', 'PWM0:SYS_MFP_P20_PWM0@P2_MFP'] },
{ f: ['P2.1', 'AD9:SYS_MFP_P21_AD9@P2_MFP', 'PWM1:SYS_MFP_P21_PWM1@P2_MFP'] },
{ f: ['P2.2', 'AD10:SYS_MFP_P22_AD10@P2_MFP', 'PWM2:SYS_MFP_P22_PWM2@P2_MFP'] },
{ f: ['P2.3', 'AD11:SYS_MFP_P23_AD11@P2_MFP', 'PWM3:SYS_MFP_P23_PWM3@P2_MFP'] },
{ f: ['P2.4', 'AD12:SYS_MFP_P24_AD12@P2_MFP', 'PWM4:SYS_MFP_P24_PWM4@P2_MFP', 'SCL1:SYS_MFP_P24_SCL1@P2_MFP'] },
{ f: ['P2.5', 'AD13:SYS_MFP_P25_AD13@P2_MFP', 'PWM5:SYS_MFP_P25_PWM5@P2_MFP', 'SDA1:SYS_MFP_P25_SDA1@P2_MFP'] },
{ f: ['P2.6', 'AD14:SYS_MFP_P26_AD14@P2_MFP', 'PWM6:SYS_MFP_P26_PWM6@P2_MFP', 'ACMP1_O:SYS_MFP_P26_ACMP1_O@P2_MFP'] },
{ f: ['P2.7', 'AD15:SYS_MFP_P27_AD15@P2_MFP', 'PWM7:SYS_MFP_P27_PWM7@P2_MFP'] },

{ f: ['P3.0', 'RXD:SYS_MFP_P30_RXD@P3_MFP', 'ACMP1_N:SYS_MFP_P30_ACMP1_N@P3_MFP'] },
{ f: ['P3.1', 'TXD:SYS_MFP_P31_TXD@P3_MFP', 'ACMP1_P:SYS_MFP_P31_ACMP1_P@P3_MFP'] },
{ f: ['P3.2', 'INT0:SYS_MFP_P32_nINT0@P3_MFP', 'T0EX:SYS_MFP_P32_T0EX@P3_MFP'] },
{ f: ['P3.3', 'INT1:SYS_MFP_P33_nINT1@P3_MFP', 'MCLK:SYS_MFP_P33_MCLK@P3_MFP', 'T1EX:SYS_MFP_P33_T1EX@P3_MFP'] },
{ f: ['P3.4', 'T0:SYS_MFP_P34_T0@P3_MFP', 'SDA:SYS_MFP_P34_SDA0@P3_MFP'] },
{ f: ['P3.5', 'T1:SYS_MFP_P35_T1@P3_MFP', 'SCL:SYS_MFP_P35_SCL0@P3_MFP', 'CKO:SYS_MFP_P35_CKO@P3_MFP'] },
{ f: ['P3.6', 'WR:SYS_MFP_P36_nWR@P3_MFP', 'CKO:SYS_MFP_P36_CKO@P3_MFP', 'ACMP0_O:SYS_MFP_P36_ACMP0_O@P3_MFP'] },
{ f: ['P3.7', 'RD:SYS_MFP_P37_nRD@P3_MFP'] },

{ f: ['P4.0', 'PWM0:SYS_MFP_P40_PWM0@P4_MFP', 'T2EX:SYS_MFP_P40_T2EX@P4_MFP'] },
{ f: ['P4.1', 'PWM1:SYS_MFP_P41_PWM1@P4_MFP', 'T3EX:SYS_MFP_P41_T3EX@P4_MFP'] },
{ f: ['P4.2', 'PWM2:SYS_MFP_P42_PWM2@P4_MFP'] },
{ f: ['P4.3', 'PWM3:SYS_MFP_P43_PWM3@P4_MFP'] },
{ f: ['P4.4', 'CS:SYS_MFP_P44_nCS@P4_MFP', 'SCL1:SYS_MFP_P44_SCL1@P4_MFP'] },
{ f: ['P4.5', 'ALE:SYS_MFP_P45_ALE@P4_MFP', 'SDA1:SYS_MFP_P45_SDA1@P4_MFP'] },
{ f: ['P4.6', 'ICE_CLK:SYS_MFP_P46_ICE_CLK@P4_MFP'] },
{ f: ['P4.7', 'ICE_DAT:SYS_MFP_P47_ICE_DAT@P4_MFP'] }
];

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

{ f: ['P3.0', 'P3_MFP[0]:0'] },
{ f: ['P3.1', 'P3_MFP[1]:0'] },
{ f: ['P3.2', 'P3_MFP[2]:0', 'P3_MFP[10]:1'] },
{ f: ['P3.3', 'P3_MFP[3]:0', 'P3_MFP[11]:1'] },
{ f: ['P3.4', 'P3_MFP[4]:0', 'P3_MFP[12]:1'] },
{ f: ['P3.5', 'P3_MFP[5]:0', 'P3_MFP[13]:1'] },
{ f: ['P3.6', 'P3_MFP[6]:0', 'P3_MFP[14]:1'] },
{ f: ['P3.7', 'P3_MFP[7]:0'] },

{ f: ['P4.0', 'P4_MFP[0]:0'] },
{ f: ['P4.1', 'P4_MFP[1]:0'] },
{ f: ['P4.2', 'P4_MFP[2]:0'] },
{ f: ['P4.3', 'P4_MFP[3]:0'] },
{ f: ['P4.4', 'P4_MFP[4]:0'] },
{ f: ['P4.5', 'P4_MFP[5]:0'] },
{ f: ['P4.6', 'P4_MFP[6]:0'] },
{ f: ['P4.7', 'P4_MFP[7]:0'] }
];

NUTOOL_PIN.g_cfg_shareBits = [];
NUTOOL_PIN.g_cfg_addGPIO = {};
NUTOOL_PIN.g_cfg_unusedGPIO = {
	"M052ZAN(QFN33)": {
		"P1.5": ["MOSI_0"],
		"P2.2": ["AD10"],
		"P2.3": ["AD11"],
		"P2.4": ["AD12"],
		"P2.5": ["AD13"],
		"P2.6": ["AD14"],
		"P0.7": ["AD7"],
		"P0.6": ["AD6"],
		"P0.5": ["AD5"],
		"P0.4": ["AD4"],
		"P0.1": ["AD1"],
		"P0.0": ["AD0"],
		"P1.4": ["SPISS0"],
		"P3.6": ["WR"]
	},
	"M054ZAN(QFN33)": function () {
		return this["M052ZAN(QFN33)"];
	},
	"M058ZAN(QFN33)": function () {
		return this["M052ZAN(QFN33)"];
	},
	"M0516ZAN(QFN33)": function () {
		return this["M052ZAN(QFN33)"];
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