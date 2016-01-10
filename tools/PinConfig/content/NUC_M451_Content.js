// chip content
NUTOOL_PIN.g_cfg_chips = [
// M451HD
{ name: "M451VG6AE", pkg: "LQFP100" },
{ name: "M451VE6AE", pkg: "LQFP100" },

{ name: "M451RG6AE", pkg: "LQFP64" },
{ name: "M451RE6AE", pkg: "LQFP64" },

{ name: "M451LG6AE", pkg: "LQFP48" },
{ name: "M451LE6AE", pkg: "LQFP48" },

{ name: "M452RG6AE", pkg: "LQFP64" },
{ name: "M452RE6AE", pkg: "LQFP64" },

{ name: "M452LG6AE", pkg: "LQFP48" },
{ name: "M452LE6AE", pkg: "LQFP48" },

//{ name: "M4LEDRG6AE", pkg: "LQFP64" },
//{ name: "M4LEDRE6AE", pkg: "LQFP64" },

//{ name: "M4LEDLG6AE", pkg: "LQFP48" },
//{ name: "M4LEDLE6AE", pkg: "LQFP48" },

{ name: "M453VG6AE", pkg: "LQFP100" },
{ name: "M453VE6AE", pkg: "LQFP100" },

{ name: "M453RG6AE", pkg: "LQFP64" },
{ name: "M453RE6AE", pkg: "LQFP64" },

{ name: "M453LG6AE", pkg: "LQFP48" },
{ name: "M453LE6AE", pkg: "LQFP48" },

{ name: "M451MLG6AE", pkg: "LQFP48" },
{ name: "M451MLE6AE", pkg: "LQFP48" },
// M451LD
{ name: "M451LD3AE", pkg: "LQFP48" },
{ name: "M451LC3AE", pkg: "LQFP48" },
{ name: "M451MLD3AE", pkg: "LQFP48" },
{ name: "M451MLC3AE", pkg: "LQFP48" },
{ name: "M452LD3AE", pkg: "LQFP48" },
{ name: "M452LC3AE", pkg: "LQFP48" },
{ name: "M453LD3AE", pkg: "LQFP48" },
{ name: "M453LC3AE", pkg: "LQFP48" },

{ name: "M451RD3AE", pkg: "LQFP64" },
{ name: "M451RC3AE", pkg: "LQFP64" },
{ name: "M451MSD3AE", pkg: "LQFP64" },
{ name: "M451MSC3AE", pkg: "LQFP64" },
{ name: "M452RD3AE", pkg: "LQFP64" },
{ name: "M453RD3AE", pkg: "LQFP64" },

{ name: "M453VD3AE", pkg: "LQFP100" }
];

NUTOOL_PIN.g_cfg_pkgs = {
	"LQFP100(URI)": [
	'PB.13', 'PB.14', 'PB.15', 'PB.5', 'PB.6', 'PB.7', 'nRESET', 'PD.0', 'AVSS', 'VDD',
	'VSS', 'PC.8', 'PD.8', 'PD.9', 'PD.1', 'PD.2', 'PD.3', 'PD.4', 'PD.5', 'PE.3',
	'PD.6', 'VBAT', 'PF.0', 'PF.1', 'PF.2',
	'PD.10', 'PD.11', 'PD.12', 'PD.13', 'PD.14', 'PD.15', 'PD.7', 'PF.3', 'PF.4', 'VSS',
	'VDD', 'LDO_CAP', 'PC.9', 'PC.10', 'PC.11', 'PC.12', 'PC.13', 'PC.14', 'PC.0', 'PC.1',
	'PC.2', 'PC.3', 'PC.4', 'PE.0', 'PC.5',
	'PC.6', 'PC.7', 'PE.4', 'PE.5', 'PF.5', 'PF.6', 'PA.8', 'PA.9', 'PA.7', 'PA.6',
	'PA.5', 'PA.4', 'VSS', 'VDD', 'PE.1', 'PE.8', 'PE.9', 'PE.10', 'PE.11', 'PE.12',
	'PE.13', 'VDDIO', 'USB_VBUS', 'USB_D-', 'USB_D+',
	'USB_ID', 'USB_VDD33_CAP', 'PE.2', 'PA.3', 'PA.2', 'PA.1', 'PA.0', 'PA.12', 'PA.13', 'PA.14',
	'PA.15', 'VSS', 'VDD', 'AVDD', 'VREF', 'PB.0', 'PB.1', 'PB.2', 'PB.3', 'PB.4',
	'PB.8', 'PB.9', 'PB.10', 'PB.11', 'PB.12'
	],
	"LQFP100(RI)": [
	'PB.13', 'PB.14', 'PB.15', 'PB.5', 'PB.6', 'PB.7', 'nRESET', 'PD.0', 'AVSS', 'VDD',
	'VSS', 'PC.8', 'PD.8', 'PD.9', 'PD.1', 'PD.2', 'PD.3', 'PD.4', 'PD.5', 'PE.3',
	'PD.6', 'VBAT', 'PF.0', 'PF.1', 'PF.2',
	'PD.10', 'PD.11', 'PD.12', 'PD.13', 'PD.14', 'PD.15', 'PD.7', 'PF.3', 'PF.4', 'VSS',
	'VDD', 'LDO_CAP', 'PC.9', 'PC.10', 'PC.11', 'PC.12', 'PC.13', 'PC.14', 'PC.0', 'PC.1',
	'PC.2', 'PC.3', 'PC.4', 'PE.0', 'PC.5',
	'PC.6', 'PC.7', 'PE.4', 'PE.5', 'PF.5', 'PF.6', 'PA.8', 'PA.9', 'PA.10', 'PA.11',
	'PE.6', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'VSS', 'VDD', 'PE.1', 'PE.8', 'PE.9',
	'PE.10', 'PE.11', 'PE.12', 'PE.13', 'VDDIO',
	'PE.7', 'PC.15', 'PE.2', 'PA.3', 'PA.2', 'PA.1', 'PA.0', 'PA.12', 'PA.13', 'PA.14',
	'PA.15', 'VSS', 'VDD', 'AVDD', 'VREF', 'PB.0', 'PB.1', 'PB.2', 'PB.3', 'PB.4',
	'PB.8', 'PB.9', 'PB.10', 'PB.11', 'PB.12'
	],
	"LQFP64(URI)": [
	'PB.15', 'PB.5', 'PB.6', 'PB.7', 'nRESET', 'PD.0', 'AVSS', 'PD.8', 'PD.9', 'PD.1',
	'PD.2', 'PD.3', 'VBAT', 'PF.0', 'PF.1', 'PF.2',
	'PD.12', 'PD.13', 'PD.14', 'PD.15', 'PD.7', 'PF.3', 'PF.4', 'VSS', 'VDD', 'LDO_CAP',
	'PC.0', 'PC.1', 'PC.2', 'PC.3', 'PC.4', 'PC.5',
	'PC.6', 'PC.7', 'PF.5', 'PF.6', 'PE.8', 'PE.9', 'PE.10', 'PE.11', 'PE.12', 'PE.13',
	'VDDIO', 'USB_VBUS', 'USB_D-', 'USB_D+', 'USB_ID', 'USB_VDD33_CAP',
	'PA.3', 'PA.2', 'PA.1', 'PA.0', 'VSS', 'VDD', 'AVDD', 'VREF', 'PB.0', 'PB.1',
	'PB.2', 'PB.3', 'PB.4', 'PB.8', 'PB.11', 'PB.12'
	],
	"LQFP64(RI)": [
	'PB.15', 'PB.5', 'PB.6', 'PB.7', 'nRESET', 'PD.0', 'AVSS', 'PD.8', 'PD.9', 'PD.1',
	'PD.2', 'PD.3', 'VBAT', 'PF.0', 'PF.1', 'PF.2',
	'PD.12', 'PD.13', 'PD.14', 'PD.15', 'PD.7', 'PF.3', 'PF.4', 'VSS', 'VDD', 'LDO_CAP',
	'PC.0', 'PC.1', 'PC.2', 'PC.3', 'PC.4', 'PE.0',
	'PC.5', 'PC.6', 'PC.7', 'PF.5', 'PF.6', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PE.8',
	'PE.9', 'PE.10', 'PE.11', 'PE.12', 'PE.13', 'VDDIO',
	'PA.3', 'PA.2', 'PA.1', 'PA.0', 'VSS', 'VDD', 'AVDD', 'VREF', 'PB.0', 'PB.1',
	'PB.2', 'PB.3', 'PB.4', 'PB.8', 'PB.11', 'PB.12'
	],
	"LQFP64(M051)": [
	'PB.5', 'PB.6', 'PB.7', 'nRESET', 'PD.0', 'AVSS', 'PC.8', 'PD.8', 'PD.9', 'PD.1',
	'PD.2', 'PD.3', 'PD.4', 'PD.5', 'PE.3', 'PD.6',
	'PD.7', 'PF.3', 'PF.4', 'VSS', 'VDD', 'LDO_CAP', 'PC.10', 'PC.11', 'PC.12', 'PC.13',
	'PC.0', 'PC.1', 'PC.2', 'PC.3', 'PC.4', 'PE.0',
	'PC.5', 'PC.6', 'PC.7', 'PE.4', 'PE.5', 'PF.5', 'PF.6', 'PA.8', 'PA.9', 'PA.10',
	'PA.11', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PE.1',
	'PA.3', 'PA.2', 'PA.1', 'PA.0', 'VSS', 'VDD', 'AVDD', 'VREF', 'PB.14', 'PB.13',
	'PB.0', 'PB.1', 'PB.2', 'PB.3', 'PB.4', 'PB.8'
	],
	"LQFP48(URI)": [
	'PB.5', 'PB.6', 'PB.7', 'nRESET', 'PD.0', 'AVSS', 'PD.1', 'PD.2', 'PD.3', 'VBAT',
	'PF.0', 'PF.1',
	'PF.2', 'PD.7', 'PF.3', 'PF.4', 'VSS', 'LDO_CAP', 'PC.0', 'PC.1', 'PC.2', 'PC.3',
	'PC.4', 'PE.0',
	'PF.5', 'PF.6', 'PE.10', 'PE.11', 'PE.12', 'PE.13', 'VDDIO', 'USB_VBUS', 'USB_D-', 'USB_D+',
	'USB_ID', 'USB_VDD33_CAP',
	'PA.3', 'PA.2', 'PA.1', 'PA.0', 'VDD', 'AVDD', 'VREF', 'PB.0', 'PB.1', 'PB.2',
	'PB.3', 'PB.4'
	],
	"LQFP48(RI)": [
	'PB.5', 'PB.6', 'PB.7', 'nRESET', 'PD.0', 'AVSS', 'PD.1', 'PD.2', 'PD.3', 'VBAT',
	'PF.0', 'PF.1',
	'PF.2', 'PD.7', 'PF.3', 'PF.4', 'VSS', 'LDO_CAP', 'PC.0', 'PC.1', 'PC.2', 'PC.3',
	'PC.4', 'PE.0',
	'PC.5', 'PC.6', 'PC.7', 'PF.5', 'PF.6', 'PE.8', 'PE.9', 'PE.10', 'PE.11', 'PE.12',
	'PE.13', 'VDDIO',
	'PA.3', 'PA.2', 'PA.1', 'PA.0', 'VDD', 'AVDD', 'VREF', 'PB.0', 'PB.1', 'PB.2',
	'PB.3', 'PB.4'
	],
	"LQFP48(M051)": [
	'PB.5', 'PB.6', 'PB.7', 'nRESET', 'PD.0', 'AVSS', 'PD.1', 'PD.2', 'PD.3', 'PD.4',
	'PD.5', 'PE.3',
	'PD.6', 'PD.7', 'PF.3', 'PF.4', 'VSS', 'LDO_CAP', 'PC.0', 'PC.1', 'PC.2', 'PC.3',
	'PC.4', 'PE.0',
	'PC.5', 'PC.6', 'PC.7', 'PE.4', 'PE.5', 'PF.5', 'PF.6', 'PA.7', 'PA.6', 'PA.5',
	'PA.4', 'PE.1',
	'PA.3', 'PA.2', 'PA.1', 'PA.0', 'VDD', 'AVDD', 'PB.0', 'PB.1', 'PB.2', 'PB.3',
	'PB.4', 'PB.8'
	]
};

NUTOOL_PIN.g_cfg_gpios = [
{ f: ['PA.0:0', 'UART1_nCTS:1', 'UART1_TXD:3', 'CAN0_RXD:4', 'SC0_CLK:5', 'PWM1_CH5:6', 'EBI_AD0:7', 'INT0:8'] },
{ f: ['PA.1:0', 'UART1_nRTS:1', 'UART1_RXD:3', 'CAN0_TXD:4', 'SC0_DAT:5', 'PWM1_CH4:6', 'EBI_AD1:7'] },
{ f: ['PA.2:0', 'USB_VBUS_EN:1', 'UART0_TXD:2', 'UART0_nCTS:3', 'I2C0_SDA:4', 'SC0_RST:5', 'PWM1_CH3:6', 'EBI_AD2:7'] },
{ f: ['PA.3:0', 'USB_VBUS_ST:1', 'UART0_RXD:2', 'UART0_nRTS:3', 'I2C0_SCL:4', 'SC0_PWR:5', 'PWM1_CH2:6', 'EBI_AD3:7'] },
{ f: ['PA.4:0', 'SPI1_SS:2', 'EBI_AD4:7'] },
{ f: ['PA.5:0', 'SPI1_MOSI:2', 'T2_EXT:3', 'EBI_AD5:7'] },
{ f: ['PA.6:0', 'SPI1_MISO:2', 'T1_EXT:3', 'EBI_AD6:7'] },
{ f: ['PA.7:0', 'SPI1_CLK:2', 'T0_EXT:3', 'EBI_AD7:7'] },
{ f: ['PA.8:0', 'UART3_TXD:3'] },
{ f: ['PA.9:0', 'UART3_RXD:3'] },
{ f: ['PA.10:0', 'UART3_nCTS:3'] },
{ f: ['PA.11:0', 'UART3_nRTS:3'] },
{ f: ['PA.12:0', 'SPI1_I2SMCLK:2', 'CAN0_TXD:4'] },
{ f: ['PA.13:0', 'CAN0_RXD:4'] },
{ f: ['PA.14:0', 'UART2_nCTS:3', 'I2C0_SMBAL:4'] },
{ f: ['PA.15:0', 'UART2_nRTS:3', 'I2C0_SMBSUS:4'] },

{ f: ['PB.0:0', 'EADC_CH0:1', 'SPI0_MOSI1:2', 'UART2_RXD:3', 'T2:4', 'DAC:5', 'EBI_nWRL:7', 'INT1:8'] },
{ f: ['PB.1:0', 'EADC_CH1:1', 'SPI0_MISO1:2', 'UART2_TXD:3', 'T3:4', 'SC0_RST:5', 'PWM0_SYNC_OUT:6', 'EBI_nWRH:7'] },
{ f: ['PB.2:0', 'EADC_CH2:1', 'SPI0_CLK:2', 'SPI1_CLK:3', 'UART1_RXD:4', 'SC0_CD:5'] },
{ f: ['PB.3:0', 'EADC_CH3:1', 'SPI0_MISO0:2', 'SPI1_MISO:3', 'UART1_TXD:4'] },
{ f: ['PB.4:0', 'EADC_CH4:1', 'SPI0_SS:2', 'SPI1_SS:3', 'UART1_nCTS:4', 'ACMP0_N:5', 'EBI_AD7:7'] },
{ f: ['PB.5:0', 'EADC_CH13:1', 'SPI0_MOSI0:2', 'SPI1_MOSI:3', 'TK3:4', 'ACMP0_P2:5', 'EBI_AD6:7'] },
{ f: ['PB.6:0', 'EADC_CH14:1', 'SPI0_MISO0:2', 'SPI1_MISO:3', 'TK4:4', 'ACMP0_P1:5', 'EBI_AD5:7'] },
{ f: ['PB.7:0', 'EADC_CH15:1', 'SPI0_CLK:2', 'SPI1_CLK:3', 'TK5:4', 'ACMP0_P0:5', 'EBI_AD4:7'] },
{ f: ['PB.8:0', 'EADC_CH5:1', 'UART1_nRTS:4', 'PWM0_CH2:6'] },
{ f: ['PB.9:0', 'EADC_CH6:1'] },
{ f: ['PB.10:0', 'EADC_CH7:1'] },
{ f: ['PB.11:0', 'EADC_CH8:1', 'TK0:4'] },
{ f: ['PB.12:0', 'EADC_CH9:1', 'TK1:4'] },
{ f: ['PB.13:0', 'EADC_CH10:1'] },
{ f: ['PB.14:0', 'EADC_CH11:1'] },
{ f: ['PB.15:0', 'EADC_CH12:1', 'TK2:4', 'ACMP0_P3:5', 'EBI_nCS1:7'] },

{ f: ['PC.0:0', 'SPI2_CLK:2', 'UART2_nCTS:3', 'CAN0_TXD:4', 'PWM0_CH0:6', 'EBI_AD8:7', 'INT2:8'] },
{ f: ['PC.1:0', 'CLKO:1', 'STDAC:2', 'UART2_nRTS:3', 'CAN0_RXD:4', 'PWM0_CH1:6', 'EBI_AD9:7'] },
{ f: ['PC.2:0', 'SPI2_SS:2', 'UART2_TXD:3', 'ACMP1_O:5', 'PWM0_CH2:6', 'EBI_AD10:7'] },
{ f: ['PC.3:0', 'SPI2_MOSI:2', 'UART2_RXD:3', 'USB_VBUS_ST:4', 'PWM0_CH3:6', 'EBI_AD11:7'] },
{ f: ['PC.4:0', 'SPI2_MISO:2', 'I2C1_SCL:3', 'USB_VBUS_EN:4', 'PWM0_CH4:6', 'EBI_AD12:7'] },
{ f: ['PC.5:0', 'SPI2_I2SMCLK:2', 'PWM0_CH5:6', 'EBI_AD13:7'] },
{ f: ['PC.6:0', 'I2C1_SMBAL:3', 'ACMP1_O:5', 'PWM1_CH0:6', 'EBI_AD14:7'] },
{ f: ['PC.7:0', 'I2C1_SMBSUS:3', 'PWM1_CH1:6', 'EBI_AD15:7'] },
{ f: ['PC.8:0', 'TK7:4'] },
{ f: ['PC.9:0', 'SPI2_I2SMCLK:2', 'PWM1_CH0:6'] },
{ f: ['PC.10:0', 'SPI2_MOSI:2', 'PWM1_CH1:6'] },
{ f: ['PC.11:0', 'SPI2_MISO:2', 'PWM1_CH2:6'] },
{ f: ['PC.12:0', 'SPI2_CLK:2', 'PWM1_CH3:6'] },
{ f: ['PC.13:0', 'SPI2_SS:2', 'PWM1_CH4:6'] },
{ f: ['PC.14:0', 'PWM1_CH5:6'] },
{ f: ['PC.15:0', 'PWM1_CH0:6'] },

{ f: ['PD.0:0', 'SPI1_I2SMCLK:2', 'UART0_RXD:3', 'TK6:4', 'ACMP1_N:5', 'INT3:8'] },
{ f: ['PD.1:0', 'PWM0_SYNC_IN:2', 'UART0_TXD:3', 'TK10:4', 'ACMP1_P2:5', 'T0:6', 'EBI_nRD:7'] },
{ f: ['PD.2:0', 'STADC:1', 'T0_EXT:3', 'TK11:4', 'ACMP1_P1:5', 'PWM0_BRAKE0:6', 'EBI_nWR:7', 'INT0:8'] },
{ f: ['PD.3:0', 'T2:1', 'T1_EXT:3', 'TK12:4', 'ACMP1_P0:5', 'PWM0_BRAKE1:6', 'EBI_MCLK:7', 'INT1:8'] },
{ f: ['PD.4:0', 'SPI1_CLK:2', 'I2C0_SDA:3', 'TK13:4', 'PWM0_BRAKE0:5', 'T0:6'] },
{ f: ['PD.5:0', 'CLKO:1', 'SPI1_MISO:2', 'I2C0_SCL:3', 'TK14:4', 'PWM0_BRAKE1:5', 'T1:6'] },
{ f: ['PD.6:0', 'CLKO:1', 'SPI1_SS:2', 'UART0_RXD:3', 'TK16:4', 'ACMP0_O:5', 'PWM0_CH5:6', 'EBI_nWR:7'] },
{ f: ['PD.7:0', 'PWM0_SYNC_IN:3', 'T1:4', 'ACMP0_O:5', 'PWM0_CH5:6', 'EBI_nRD:7'] },
{ f: ['PD.8:0', 'TK8:4', 'EBI_nCS0:7'] },
{ f: ['PD.9:0', 'TK9:4', 'ACMP1_P3:5', 'EBI_ALE:7'] },
{ f: ['PD.10:0', 'T2:4'] },
{ f: ['PD.11:0', 'T3:4'] },
{ f: ['PD.12:0', 'SPI2_SS:2', 'UART3_TXD:3', 'PWM1_CH0:6', 'EBI_ADR16:7'] },
{ f: ['PD.13:0', 'SPI2_MOSI:2', 'UART3_RXD:3', 'PWM1_CH1:6', 'EBI_ADR17:7'] },
{ f: ['PD.14:0', 'SPI2_MISO:2', 'UART3_nCTS:3', 'PWM1_CH2:6', 'EBI_ADR18:7'] },
{ f: ['PD.15:0', 'SPI2_CLK:2', 'UART3_nRTS:3', 'PWM1_CH3:6', 'EBI_ADR19:7'] },

{ f: ['PE.0:0', 'SPI2_CLK:2', 'I2C1_SDA:3', 'T2_EXT:4', 'SC0_CD:5', 'PWM0_CH0:6', 'EBI_nCS1:7', 'INT4:8'] },
{ f: ['PE.1:0', 'T3_EXT:3', 'SC0_CD:5', 'PWM0_CH1:6'] },
{ f: ['PE.2:0', 'PWM1_CH1:6'] },
{ f: ['PE.3:0', 'SPI1_MOSI:2', 'TK15:4', 'PWM0_CH3:6'] },
{ f: ['PE.4:0', 'I2C1_SCL:3', 'SC0_PWR:5', 'PWM1_BRAKE0:6', 'EBI_nCS0:7', 'INT0:8'] },
{ f: ['PE.5:0', 'I2C1_SDA:3', 'SC0_RST:5', 'PWM1_BRAKE1:6', 'EBI_ALE:7', 'INT1:8'] },
{ f: ['PE.6:0', 'T3_EXT:3'] },
{ f: ['PE.7:0'] },
{ f: ['PE.8:0', 'UART1_TXD:1', 'SPI0_MISO1:2', 'I2C1_SCL:4', 'SC0_PWR:5'] },
{ f: ['PE.9:0', 'UART1_RXD:1', 'SPI0_MOSI1:2', 'I2C1_SDA:4', 'SC0_RST:5'] },
{ f: ['PE.10:0', 'SPI1_MISO:1', 'SPI0_MISO0:2', 'UART1_nCTS:3', 'I2C0_SMBAL:4', 'SC0_DAT:5'] },
{ f: ['PE.11:0', 'SPI1_MOSI:1', 'SPI0_MOSI0:2', 'UART1_nRTS:3', 'I2C0_SMBSUS:4', 'SC0_CLK:5'] },
{ f: ['PE.12:0', 'SPI1_SS:1', 'SPI0_SS:2', 'UART1_TXD:3', 'I2C0_SCL:4'] },
{ f: ['PE.13:0', 'SPI1_CLK:1', 'SPI0_CLK:2', 'UART1_RXD:3', 'I2C0_SDA:4'] },
{ f: ['PE.14:0'] },
{ f: ['PE.15:0'] },

{ f: ['PF.0:0', 'X32_OUT:1', 'INT5:8'] },
{ f: ['PF.1:0', 'X32_IN:1'] },
{ f: ['PF.2:0', 'TAMPER:1'] },
{ f: ['PF.3:0', 'XT1_OUT:1', 'I2C1_SCL:3'] },
{ f: ['PF.4:0', 'XT1_IN:1', 'I2C1_SDA:3'] },
{ f: ['PF.5:0', 'ICE_CLK:1'] },
{ f: ['PF.6:0', 'ICE_DAT:1'] },
{ f: ['PF.7:0'] },
{ f: ['PF.8:0'] },
{ f: ['PF.9:0'] },
{ f: ['PF.10:0'] },
{ f: ['PF.11:0'] },
{ f: ['PF.12:0'] },
{ f: ['PF.13:0'] },
{ f: ['PF.14:0'] },
{ f: ['PF.15:0'] }
];

NUTOOL_PIN.g_cfg_gpiosDefines = [
{ f: ['PA.0', 'UART1_nCTS:SYS_GPA_MFPL_PA0MFP_UART1_nCTS@GPA_MFPL', 'UART1_TXD:SYS_GPA_MFPL_PA0MFP_UART1_TXD@GPA_MFPL', 'CAN0_RXD:SYS_GPA_MFPL_PA0MFP_CAN0_RXD@GPA_MFPL', 'SC0_CLK:SYS_GPA_MFPL_PA0MFP_SC0_CLK@GPA_MFPL', 'PWM1_CH5:SYS_GPA_MFPL_PA0MFP_PWM1_CH5@GPA_MFPL', 'EBI_AD0:SYS_GPA_MFPL_PA0MFP_EBI_AD0@GPA_MFPL', 'INT0:SYS_GPA_MFPL_PA0MFP_INT0@GPA_MFPL'] },
{ f: ['PA.1', 'UART1_nRTS:SYS_GPA_MFPL_PA1MFP_UART1_nRTS@GPA_MFPL', 'UART1_RXD:SYS_GPA_MFPL_PA1MFP_UART1_RXD@GPA_MFPL', 'CAN0_TXD:SYS_GPA_MFPL_PA1MFP_CAN0_TXD@GPA_MFPL', 'SC0_DAT:SYS_GPA_MFPL_PA1MFP_SC0_DAT@GPA_MFPL', 'PWM1_CH4:SYS_GPA_MFPL_PA1MFP_PWM1_CH4@GPA_MFPL', 'EBI_AD1:SYS_GPA_MFPL_PA1MFP_EBI_AD1@GPA_MFPL'] },
{ f: ['PA.2', 'USB_VBUS_EN:SYS_GPA_MFPL_PA2MFP_USB_VBUS_EN@GPA_MFPL', 'UART0_TXD:SYS_GPA_MFPL_PA2MFP_UART0_TXD@GPA_MFPL', 'UART0_nCTS:SYS_GPA_MFPL_PA2MFP_UART0_nCTS@GPA_MFPL', 'I2C0_SDA:SYS_GPA_MFPL_PA2MFP_I2C0_SDA@GPA_MFPL', 'SC0_RST:SYS_GPA_MFPL_PA2MFP_SC0_RST@GPA_MFPL', 'PWM1_CH3:SYS_GPA_MFPL_PA2MFP_PWM1_CH3@GPA_MFPL', 'EBI_AD2:SYS_GPA_MFPL_PA2MFP_EBI_AD2@GPA_MFPL'] },
{ f: ['PA.3', 'USB_VBUS_ST:SYS_GPA_MFPL_PA3MFP_USB_VBUS_ST@GPA_MFPL', 'UART0_RXD:SYS_GPA_MFPL_PA3MFP_UART0_RXD@GPA_MFPL', 'UART0_nRTS:SYS_GPA_MFPL_PA3MFP_UART0_nRTS@GPA_MFPL', 'I2C0_SCL:SYS_GPA_MFPL_PA3MFP_I2C0_SCL@GPA_MFPL', 'SC0_PWR:SYS_GPA_MFPL_PA3MFP_SC0_PWR@GPA_MFPL', 'PWM1_CH2:SYS_GPA_MFPL_PA3MFP_PWM1_CH2@GPA_MFPL', 'EBI_AD3:SYS_GPA_MFPL_PA3MFP_EBI_AD3@GPA_MFPL'] },
{ f: ['PA.4', 'SPI1_SS:SYS_GPA_MFPL_PA4MFP_SPI1_SS@GPA_MFPL', 'EBI_AD4:SYS_GPA_MFPL_PA4MFP_EBI_AD4@GPA_MFPL'] },
{ f: ['PA.5', 'SPI1_MOSI:SYS_GPA_MFPL_PA5MFP_SPI1_MOSI@GPA_MFPL', 'T2_EXT:SYS_GPA_MFPL_PA5MFP_T2_EXT@GPA_MFPL', 'EBI_AD5:SYS_GPA_MFPL_PA5MFP_EBI_AD5@GPA_MFPL'] },
{ f: ['PA.6', 'SPI1_MISO:SYS_GPA_MFPL_PA6MFP_SPI1_MISO@GPA_MFPL', 'T1_EXT:SYS_GPA_MFPL_PA6MFP_T1_EXT@GPA_MFPL', 'EBI_AD6:SYS_GPA_MFPL_PA6MFP_EBI_AD6@GPA_MFPL'] },
{ f: ['PA.7', 'SPI1_CLK:SYS_GPA_MFPL_PA7MFP_SPI1_CLK@GPA_MFPL', 'T0_EXT:SYS_GPA_MFPL_PA7MFP_T0_EXT@GPA_MFPL', 'EBI_AD7:SYS_GPA_MFPL_PA7MFP_EBI_AD7@GPA_MFPL'] },
{ f: ['PA.8', 'UART3_TXD:SYS_GPA_MFPH_PA8MFP_UART3_TXD@GPA_MFPH'] },
{ f: ['PA.9', 'UART3_RXD:SYS_GPA_MFPH_PA9MFP_UART3_RXD@GPA_MFPH'] },
{ f: ['PA.10', 'UART3_nCTS:SYS_GPA_MFPH_PA10MFP_UART3_nCTS@GPA_MFPH'] },
{ f: ['PA.11', 'UART3_nRTS:SYS_GPA_MFPH_PA11MFP_UART3_nRTS@GPA_MFPH'] },
{ f: ['PA.12', 'SPI1_I2SMCLK:SYS_GPA_MFPH_PA12MFP_SPI1_I2SMCLK@GPA_MFPH', 'CAN0_TXD:SYS_GPA_MFPH_PA12MFP_CAN0_TXD@GPA_MFPH'] },
{ f: ['PA.13', 'CAN0_RXD:SYS_GPA_MFPH_PA13MFP_CAN0_RXD@GPA_MFPH'] },
{ f: ['PA.14', 'UART2_nCTS:SYS_GPA_MFPH_PA14MFP_UART2_nCTS@GPA_MFPH', 'I2C0_SMBAL:SYS_GPA_MFPH_PA14MFP_I2C0_SMBAL@GPA_MFPH'] },
{ f: ['PA.15', 'UART2_nRTS:SYS_GPA_MFPH_PA15MFP_UART2_nRTS@GPA_MFPH', 'I2C0_SMBSUS:SYS_GPA_MFPH_PA15MFP_I2C0_SMBSUS@GPA_MFPH'] },

{ f: ['PB.0', 'EADC_CH0:SYS_GPB_MFPL_PB0MFP_EADC_CH0@GPB_MFPL', 'SPI0_MOSI1:SYS_GPB_MFPL_PB0MFP_SPI0_MOSI1@GPB_MFPL', 'UART2_RXD:SYS_GPB_MFPL_PB0MFP_UART2_RXD@GPB_MFPL', 'T2:SYS_GPB_MFPL_PB0MFP_T2@GPB_MFPL', 'DAC:SYS_GPB_MFPL_PB0MFP_DAC@GPB_MFPL', 'EBI_nWRL:SYS_GPB_MFPL_PB0MFP_EBI_nWRL@GPB_MFPL', 'INT1:SYS_GPB_MFPL_PB0MFP_INT1@GPB_MFPL'] },
{ f: ['PB.1', 'EADC_CH1:SYS_GPB_MFPL_PB1MFP_EADC_CH1@GPB_MFPL', 'SPI0_MISO1:SYS_GPB_MFPL_PB1MFP_SPI0_MISO1@GPB_MFPL', 'UART2_TXD:SYS_GPB_MFPL_PB1MFP_UART2_TXD@GPB_MFPL', 'T3:SYS_GPB_MFPL_PB1MFP_T3@GPB_MFPL', 'SC0_RST:SYS_GPB_MFPL_PB1MFP_SC0_RST@GPB_MFPL', 'PWM0_SYNC_OUT:SYS_GPB_MFPL_PB1MFP_PWM0_SYNC_OUT@GPB_MFPL', 'EBI_nWRH:SYS_GPB_MFPL_PB1MFP_EBI_nWRH@GPB_MFPL'] },
{ f: ['PB.2', 'EADC_CH2:SYS_GPB_MFPL_PB2MFP_EADC_CH2@GPB_MFPL', 'SPI0_CLK:SYS_GPB_MFPL_PB2MFP_SPI0_CLK@GPB_MFPL', 'SPI1_CLK:SYS_GPB_MFPL_PB2MFP_SPI1_CLK@GPB_MFPL', 'UART1_RXD:SYS_GPB_MFPL_PB2MFP_UART1_RXD@GPB_MFPL', 'SC0_CD:SYS_GPB_MFPL_PB2MFP_SC0_CD@GPB_MFPL'] },
{ f: ['PB.3', 'EADC_CH3:SYS_GPB_MFPL_PB3MFP_EADC_CH3@GPB_MFPL', 'SPI0_MISO0:SYS_GPB_MFPL_PB3MFP_SPI0_MISO0@GPB_MFPL', 'SPI1_MISO:SYS_GPB_MFPL_PB3MFP_SPI1_MISO@GPB_MFPL', 'UART1_TXD:SYS_GPB_MFPL_PB3MFP_UART1_TXD@GPB_MFPL'] },
{ f: ['PB.4', 'EADC_CH4:SYS_GPB_MFPL_PB4MFP_EADC_CH4@GPB_MFPL', 'SPI0_SS:SYS_GPB_MFPL_PB4MFP_SPI0_SS@GPB_MFPL', 'SPI1_SS:SYS_GPB_MFPL_PB4MFP_SPI1_SS@GPB_MFPL', 'UART1_nCTS:SYS_GPB_MFPL_PB4MFP_UART1_nCTS@GPB_MFPL', 'ACMP0_N:SYS_GPB_MFPL_PB4MFP_ACMP0_N@GPB_MFPL', 'EBI_AD7:SYS_GPB_MFPL_PB4MFP_EBI_AD7@GPB_MFPL'] },
{ f: ['PB.5', 'EADC_CH13:SYS_GPB_MFPL_PB5MFP_EADC_CH13@GPB_MFPL', 'SPI0_MOSI0:SYS_GPB_MFPL_PB5MFP_SPI0_MOSI0@GPB_MFPL', 'SPI1_MOSI:SYS_GPB_MFPL_PB5MFP_SPI1_MOSI@GPB_MFPL', 'TK3:SYS_GPB_MFPL_PB5MFP_TK3@GPB_MFPL', 'ACMP0_P2:SYS_GPB_MFPL_PB5MFP_ACMP0_P2@GPB_MFPL', 'EBI_AD6:SYS_GPB_MFPL_PB5MFP_EBI_AD6@GPB_MFPL'] },
{ f: ['PB.6', 'EADC_CH14:SYS_GPB_MFPL_PB6MFP_EADC_CH14@GPB_MFPL', 'SPI0_MISO0:SYS_GPB_MFPL_PB6MFP_SPI0_MISO0@GPB_MFPL', 'SPI1_MISO:SYS_GPB_MFPL_PB6MFP_SPI1_MISO@GPB_MFPL', 'TK4:SYS_GPB_MFPL_PB6MFP_TK4@GPB_MFPL', 'ACMP0_P1:SYS_GPB_MFPL_PB6MFP_ACMP0_P1@GPB_MFPL', 'EBI_AD5:SYS_GPB_MFPL_PB6MFP_EBI_AD5@GPB_MFPL'] },
{ f: ['PB.7', 'EADC_CH15:SYS_GPB_MFPL_PB7MFP_EADC_CH15@GPB_MFPL', 'SPI0_CLK:SYS_GPB_MFPL_PB7MFP_SPI0_CLK@GPB_MFPL', 'SPI1_CLK:SYS_GPB_MFPL_PB7MFP_SPI1_CLK@GPB_MFPL', 'TK5:SYS_GPB_MFPL_PB7MFP_TK5@GPB_MFPL', 'ACMP0_P0:SYS_GPB_MFPL_PB7MFP_ACMP0_P0@GPB_MFPL', 'EBI_AD4:SYS_GPB_MFPL_PB7MFP_EBI_AD4@GPB_MFPL'] },
{ f: ['PB.8', 'EADC_CH5:SYS_GPB_MFPH_PB8MFP_EADC_CH5@GPB_MFPH', 'UART1_nRTS:SYS_GPB_MFPH_PB8MFP_UART1_nRTS@GPB_MFPH', 'PWM0_CH2:SYS_GPB_MFPH_PB8MFP_PWM0_CH2@GPB_MFPH'] },
{ f: ['PB.9', 'EADC_CH6:SYS_GPB_MFPH_PB9MFP_EADC_CH6@GPB_MFPH'] },
{ f: ['PB.10', 'EADC_CH7:SYS_GPB_MFPH_PB10MFP_EADC_CH7@GPB_MFPH'] },
{ f: ['PB.11', 'EADC_CH8:SYS_GPB_MFPH_PB11MFP_EADC_CH8@GPB_MFPH', 'TK0:SYS_GPB_MFPH_PB11MFP_TK0@GPB_MFPH'] },
{ f: ['PB.12', 'EADC_CH9:SYS_GPB_MFPH_PB12MFP_EADC_CH9@GPB_MFPH', 'TK1:SYS_GPB_MFPH_PB12MFP_TK1@GPB_MFPH'] },
{ f: ['PB.13', 'EADC_CH10:SYS_GPB_MFPH_PB13MFP_EADC_CH10@GPB_MFPH'] },
{ f: ['PB.14', 'EADC_CH11:SYS_GPB_MFPH_PB14MFP_EADC_CH11@GPB_MFPH'] },
{ f: ['PB.15', 'EADC_CH12:SYS_GPB_MFPH_PB15MFP_EADC_CH12@GPB_MFPH', 'TK2:SYS_GPB_MFPH_PB15MFP_TK2@GPB_MFPH', 'ACMP0_P3:SYS_GPB_MFPH_PB15MFP_ACMP0_P3@GPB_MFPH', 'EBI_nCS1:SYS_GPB_MFPH_PB15MFP_EBI_nCS1@GPB_MFPH'] },

{ f: ['PC.0', 'SPI2_CLK:SYS_GPC_MFPL_PC0MFP_SPI2_CLK@GPC_MFPL', 'UART2_nCTS:SYS_GPC_MFPL_PC0MFP_UART2_nCTS@GPC_MFPL', 'CAN0_TXD:SYS_GPC_MFPL_PC0MFP_CAN0_TXD@GPC_MFPL', 'PWM0_CH0:SYS_GPC_MFPL_PC0MFP_PWM0_CH0@GPC_MFPL', 'EBI_AD8:SYS_GPC_MFPL_PC0MFP_EBI_AD8@GPC_MFPL', 'INT2:SYS_GPC_MFPL_PC0MFP_INT2@GPC_MFPL'] },
{ f: ['PC.1', 'CLKO:SYS_GPC_MFPL_PC1MFP_CLKO@GPC_MFPL', 'STDAC:SYS_GPC_MFPL_PC1MFP_STDAC@GPC_MFPL', 'UART2_nRTS:SYS_GPC_MFPL_PC1MFP_UART2_nRTS@GPC_MFPL', 'CAN0_RXD:SYS_GPC_MFPL_PC1MFP_CAN0_RXD@GPC_MFPL', 'PWM0_CH1:SYS_GPC_MFPL_PC1MFP_PWM0_CH1@GPC_MFPL', 'EBI_AD9:SYS_GPC_MFPL_PC1MFP_EBI_AD9@GPC_MFPL'] },
{ f: ['PC.2', 'SPI2_SS:SYS_GPC_MFPL_PC2MFP_SPI2_SS@GPC_MFPL', 'UART2_TXD:SYS_GPC_MFPL_PC2MFP_UART2_TXD@GPC_MFPL', 'ACMP1_O:SYS_GPC_MFPL_PC2MFP_ACMP1_O@GPC_MFPL', 'PWM0_CH2:SYS_GPC_MFPL_PC2MFP_PWM0_CH2@GPC_MFPL', 'EBI_AD10:SYS_GPC_MFPL_PC2MFP_EBI_AD10@GPC_MFPL'] },
{ f: ['PC.3', 'SPI2_MOSI:SYS_GPC_MFPL_PC3MFP_SPI2_MOSI@GPC_MFPL', 'UART2_RXD:SYS_GPC_MFPL_PC3MFP_UART2_RXD@GPC_MFPL', 'USB_VBUS_ST:SYS_GPC_MFPL_PC3MFP_USB_VBUS_ST@GPC_MFPL', 'PWM0_CH3:SYS_GPC_MFPL_PC3MFP_PWM0_CH3@GPC_MFPL', 'EBI_AD11:SYS_GPC_MFPL_PC3MFP_EBI_AD11@GPC_MFPL'] },
{ f: ['PC.4', 'SPI2_MISO:SYS_GPC_MFPL_PC4MFP_SPI2_MISO@GPC_MFPL', 'I2C1_SCL:SYS_GPC_MFPL_PC4MFP_I2C1_SCL@GPC_MFPL', 'USB_VBUS_EN:SYS_GPC_MFPL_PC4MFP_USB_VBUS_EN@GPC_MFPL', 'PWM0_CH4:SYS_GPC_MFPL_PC4MFP_PWM0_CH4@GPC_MFPL', 'EBI_AD12:SYS_GPC_MFPL_PC4MFP_EBI_AD12@GPC_MFPL'] },
{ f: ['PC.5', 'SPI2_I2SMCLK:SYS_GPC_MFPL_PC5MFP_SPI2_I2SMCLK@GPC_MFPL', 'PWM0_CH5:SYS_GPC_MFPL_PC5MFP_PWM0_CH5@GPC_MFPL', 'EBI_AD13:SYS_GPC_MFPL_PC5MFP_EBI_AD13@GPC_MFPL'] },
{ f: ['PC.6', 'I2C1_SMBAL:SYS_GPC_MFPL_PC6MFP_I2C1_SMBAL@GPC_MFPL', 'ACMP1_O:SYS_GPC_MFPL_PC6MFP_ACMP1_O@GPC_MFPL', 'PWM1_CH0:SYS_GPC_MFPL_PC6MFP_PWM1_CH0@GPC_MFPL', 'EBI_AD14:SYS_GPC_MFPL_PC6MFP_EBI_AD14@GPC_MFPL'] },
{ f: ['PC.7', 'I2C1_SMBSUS:SYS_GPC_MFPL_PC7MFP_I2C1_SMBSUS@GPC_MFPL', 'PWM1_CH1:SYS_GPC_MFPL_PC7MFP_PWM1_CH1@GPC_MFPL', 'EBI_AD15:SYS_GPC_MFPL_PC7MFP_EBI_AD15@GPC_MFPL'] },
{ f: ['PC.8', 'TK7:SYS_GPC_MFPH_PC8MFP_TK7@GPC_MFPH'] },
{ f: ['PC.9', 'SPI2_I2SMCLK:SYS_GPC_MFPH_PC9MFP_SPI2_I2SMCLK@GPC_MFPH', 'PWM1_CH0:SYS_GPC_MFPH_PC9MFP_PWM1_CH0@GPC_MFPH'] },
{ f: ['PC.10', 'SPI2_MOSI:SYS_GPC_MFPH_PC10MFP_SPI2_MOSI@GPC_MFPH', 'PWM1_CH1:SYS_GPC_MFPH_PC10MFP_PWM1_CH1@GPC_MFPH'] },
{ f: ['PC.11', 'SPI2_MISO:SYS_GPC_MFPH_PC11MFP_SPI2_MISO@GPC_MFPH', 'PWM1_CH2:SYS_GPC_MFPH_PC11MFP_PWM1_CH2@GPC_MFPH'] },
{ f: ['PC.12', 'SPI2_CLK:SYS_GPC_MFPH_PC12MFP_SPI2_CLK@GPC_MFPH', 'PWM1_CH3:SYS_GPC_MFPH_PC12MFP_PWM1_CH3@GPC_MFPH'] },
{ f: ['PC.13', 'SPI2_SS:SYS_GPC_MFPH_PC13MFP_SPI2_SS@GPC_MFPH', 'PWM1_CH4:SYS_GPC_MFPH_PC13MFP_PWM1_CH4@GPC_MFPH'] },
{ f: ['PC.14', 'PWM1_CH5:SYS_GPC_MFPH_PC14MFP_PWM1_CH5@GPC_MFPH'] },
{ f: ['PC.15', 'PWM1_CH0:SYS_GPC_MFPH_PC15MFP_PWM1_CH0@GPC_MFPH'] },

{ f: ['PD.0', 'SPI1_I2SMCLK:SYS_GPD_MFPL_PD0MFP_SPI1_I2SMCLK@GPD_MFPL', 'UART0_RXD:SYS_GPD_MFPL_PD0MFP_UART0_RXD@GPD_MFPL', 'TK6:SYS_GPD_MFPL_PD0MFP_TK6@GPD_MFPL', 'ACMP1_N:SYS_GPD_MFPL_PD0MFP_ACMP1_N@GPD_MFPL', 'INT3:SYS_GPD_MFPL_PD0MFP_INT3@GPD_MFPL'] },
{ f: ['PD.1', 'PWM0_SYNC_IN:SYS_GPD_MFPL_PD1MFP_PWM0_SYNC_IN@GPD_MFPL', 'UART0_TXD:SYS_GPD_MFPL_PD1MFP_UART0_TXD@GPD_MFPL', 'TK10:SYS_GPD_MFPL_PD1MFP_TK10@GPD_MFPL', 'ACMP1_P2:SYS_GPD_MFPL_PD1MFP_ACMP1_P2@GPD_MFPL', 'T0:SYS_GPD_MFPL_PD1MFP_T0@GPD_MFPL', 'EBI_nRD:SYS_GPD_MFPL_PD1MFP_EBI_nRD@GPD_MFPL'] },
{ f: ['PD.2', 'STADC:SYS_GPD_MFPL_PD2MFP_STADC@GPD_MFPL', 'T0_EXT:SYS_GPD_MFPL_PD2MFP_T0_EXT@GPD_MFPL', 'TK11:SYS_GPD_MFPL_PD2MFP_TK11@GPD_MFPL', 'ACMP1_P1:SYS_GPD_MFPL_PD2MFP_ACMP1_P1@GPD_MFPL', 'PWM0_BRAKE0:SYS_GPD_MFPL_PD2MFP_PWM0_BRAKE0@GPD_MFPL', 'EBI_nWR:SYS_GPD_MFPL_PD2MFP_EBI_nWR@GPD_MFPL', 'INT0:SYS_GPD_MFPL_PD2MFP_INT0@GPD_MFPL'] },
{ f: ['PD.3', 'T2:SYS_GPD_MFPL_PD3MFP_T2@GPD_MFPL', 'T1_EXT:SYS_GPD_MFPL_PD3MFP_T1_EXT@GPD_MFPL', 'TK12:SYS_GPD_MFPL_PD3MFP_TK12@GPD_MFPL', 'ACMP1_P0:SYS_GPD_MFPL_PD3MFP_ACMP1_P0@GPD_MFPL', 'PWM0_BRAKE1:SYS_GPD_MFPL_PD3MFP_PWM0_BRAKE1@GPD_MFPL', 'EBI_MCLK:SYS_GPD_MFPL_PD3MFP_EBI_MCLK@GPD_MFPL', 'INT1:SYS_GPD_MFPL_PD3MFP_INT1@GPD_MFPL'] },
{ f: ['PD.4', 'SPI1_CLK:SYS_GPD_MFPL_PD4MFP_SPI1_CLK@GPD_MFPL', 'I2C0_SDA:SYS_GPD_MFPL_PD4MFP_I2C0_SDA@GPD_MFPL', 'TK13:SYS_GPD_MFPL_PD4MFP_TK13@GPD_MFPL', 'PWM0_BRAKE0:SYS_GPD_MFPL_PD4MFP_PWM0_BRAKE0@GPD_MFPL', 'T0:SYS_GPD_MFPL_PD4MFP_T0@GPD_MFPL'] },
{ f: ['PD.5', 'CLKO:SYS_GPD_MFPL_PD5MFP_CLKO@GPD_MFPL', 'SPI1_MISO:SYS_GPD_MFPL_PD5MFP_SPI1_MISO@GPD_MFPL', 'I2C0_SCL:SYS_GPD_MFPL_PD5MFP_I2C0_SCL@GPD_MFPL', 'TK14:SYS_GPD_MFPL_PD5MFP_TK14@GPD_MFPL', 'PWM0_BRAKE1:SYS_GPD_MFPL_PD5MFP_PWM0_BRAKE1@GPD_MFPL', 'T1:SYS_GPD_MFPL_PD5MFP_T1@GPD_MFPL'] },
{ f: ['PD.6', 'CLKO:SYS_GPD_MFPL_PD6MFP_CLKO@GPD_MFPL', 'SPI1_SS:SYS_GPD_MFPL_PD6MFP_SPI1_SS@GPD_MFPL', 'UART0_RXD:SYS_GPD_MFPL_PD6MFP_UART0_RXD@GPD_MFPL', 'TK16:SYS_GPD_MFPL_PD6MFP_TK16@GPD_MFPL', 'ACMP0_O:SYS_GPD_MFPL_PD6MFP_ACMP0_O@GPD_MFPL', 'PWM0_CH5:SYS_GPD_MFPL_PD6MFP_PWM0_CH5@GPD_MFPL', 'EBI_nWR:SYS_GPD_MFPL_PD6MFP_EBI_nWR@GPD_MFPL'] },
{ f: ['PD.7', 'PWM0_SYNC_IN:SYS_GPD_MFPL_PD7MFP_PWM0_SYNC_IN@GPD_MFPL', 'T1:SYS_GPD_MFPL_PD7MFP_T1@GPD_MFPL', 'ACMP0_O:SYS_GPD_MFPL_PD7MFP_ACMP0_O@GPD_MFPL', 'PWM0_CH5:SYS_GPD_MFPL_PD7MFP_PWM0_CH5@GPD_MFPL', 'EBI_nRD:SYS_GPD_MFPL_PD7MFP_EBI_nRD@GPD_MFPL'] },
{ f: ['PD.8', 'TK8:SYS_GPD_MFPH_PD8MFP_TK8@GPD_MFPH', 'EBI_nCS0:SYS_GPD_MFPH_PD8MFP_EBI_nCS0@GPD_MFPH'] },
{ f: ['PD.9', 'TK9:SYS_GPD_MFPH_PD9MFP_TK9@GPD_MFPH', 'ACMP1_P3:SYS_GPD_MFPH_PD9MFP_ACMP1_P3@GPD_MFPH', 'EBI_ALE:SYS_GPD_MFPH_PD9MFP_EBI_ALE@GPD_MFPH'] },
{ f: ['PD.10', 'T2:SYS_GPD_MFPH_PD10MFP_T2@GPD_MFPH'] },
{ f: ['PD.11', 'T3:SYS_GPD_MFPH_PD11MFP_T3@GPD_MFPH'] },
{ f: ['PD.12', 'SPI2_SS:SYS_GPD_MFPH_PD12MFP_SPI2_SS@GPD_MFPH', 'UART3_TXD:SYS_GPD_MFPH_PD12MFP_UART3_TXD@GPD_MFPH', 'PWM1_CH0:SYS_GPD_MFPH_PD12MFP_PWM1_CH0@GPD_MFPH', 'EBI_ADR16:SYS_GPD_MFPH_PD12MFP_EBI_ADR16@GPD_MFPH'] },
{ f: ['PD.13', 'SPI2_MOSI:SYS_GPD_MFPH_PD13MFP_SPI2_MOSI@GPD_MFPH', 'UART3_RXD:SYS_GPD_MFPH_PD13MFP_UART3_RXD@GPD_MFPH', 'PWM1_CH1:SYS_GPD_MFPH_PD13MFP_PWM1_CH1@GPD_MFPH', 'EBI_ADR17:SYS_GPD_MFPH_PD13MFP_EBI_ADR17@GPD_MFPH'] },
{ f: ['PD.14', 'SPI2_MISO:SYS_GPD_MFPH_PD14MFP_SPI2_MISO@GPD_MFPH', 'UART3_nCTS:SYS_GPD_MFPH_PD14MFP_UART3_nCTS@GPD_MFPH', 'PWM1_CH2:SYS_GPD_MFPH_PD14MFP_PWM1_CH2@GPD_MFPH', 'EBI_ADR18:SYS_GPD_MFPH_PD14MFP_EBI_ADR18@GPD_MFPH'] },
{ f: ['PD.15', 'SPI2_CLK:SYS_GPD_MFPH_PD15MFP_SPI2_CLK@GPD_MFPH', 'UART3_nRTS:SYS_GPD_MFPH_PD15MFP_UART3_nRTS@GPD_MFPH', 'PWM1_CH3:SYS_GPD_MFPH_PD15MFP_PWM1_CH3@GPD_MFPH', 'EBI_ADR19:SYS_GPD_MFPH_PD15MFP_EBI_ADR19@GPD_MFPH'] },

{ f: ['PE.0', 'SPI2_CLK:SYS_GPE_MFPL_PE0MFP_SPI2_CLK@GPE_MFPL', 'I2C1_SDA:SYS_GPE_MFPL_PE0MFP_I2C1_SDA@GPE_MFPL', 'T2_EXT:SYS_GPE_MFPL_PE0MFP_T2_EXT@GPE_MFPL', 'SC0_CD:SYS_GPE_MFPL_PE0MFP_SC0_CD@GPE_MFPL', 'PWM0_CH0:SYS_GPE_MFPL_PE0MFP_PWM0_CH0@GPE_MFPL', 'EBI_nCS1:SYS_GPE_MFPL_PE0MFP_EBI_nCS1@GPE_MFPL', 'INT4:SYS_GPE_MFPL_PE0MFP_INT4@GPE_MFPL'] },
{ f: ['PE.1', 'T3_EXT:SYS_GPE_MFPL_PE1MFP_T3_EXT@GPE_MFPL', 'SC0_CD:SYS_GPE_MFPL_PE1MFP_SC0_CD@GPE_MFPL', 'PWM0_CH1:SYS_GPE_MFPL_PE1MFP_PWM0_CH1@GPE_MFPL'] },
{ f: ['PE.2', 'PWM1_CH1:SYS_GPE_MFPL_PE2MFP_PWM1_CH1@GPE_MFPL'] },
{ f: ['PE.3', 'SPI1_MOSI:SYS_GPE_MFPL_PE3MFP_SPI1_MOSI@GPE_MFPL', 'TK15:SYS_GPE_MFPL_PE3MFP_TK15@GPE_MFPL', 'PWM0_CH3:SYS_GPE_MFPL_PE3MFP_PWM0_CH3@GPE_MFPL'] },
{ f: ['PE.4', 'I2C1_SCL:SYS_GPE_MFPL_PE4MFP_I2C1_SCL@GPE_MFPL', 'SC0_PWR:SYS_GPE_MFPL_PE4MFP_SC0_PWR@GPE_MFPL', 'PWM1_BRAKE0:SYS_GPE_MFPL_PE4MFP_PWM1_BRAKE0@GPE_MFPL', 'EBI_nCS0:SYS_GPE_MFPL_PE4MFP_EBI_nCS0@GPE_MFPL', 'INT0:SYS_GPE_MFPL_PE4MFP_INT0@GPE_MFPL'] },
{ f: ['PE.5', 'I2C1_SDA:SYS_GPE_MFPL_PE5MFP_I2C1_SDA@GPE_MFPL', 'SC0_RST:SYS_GPE_MFPL_PE5MFP_SC0_RST@GPE_MFPL', 'PWM1_BRAKE1:SYS_GPE_MFPL_PE5MFP_PWM1_BRAKE1@GPE_MFPL', 'EBI_ALE:SYS_GPE_MFPL_PE5MFP_EBI_ALE@GPE_MFPL', 'INT1:SYS_GPE_MFPL_PE5MFP_INT1@GPE_MFPL'] },
{ f: ['PE.6', 'T3_EXT:SYS_GPE_MFPL_PE6MFP_T3_EXT@GPE_MFPL'] },
{ f: ['PE.7'] },
{ f: ['PE.8', 'UART1_TXD:SYS_GPE_MFPH_PE8MFP_UART1_TXD@GPE_MFPH', 'SPI0_MISO1:SYS_GPE_MFPH_PE8MFP_SPI0_MISO1@GPE_MFPH', 'I2C1_SCL:SYS_GPE_MFPH_PE8MFP_I2C1_SCL@GPE_MFPH', 'SC0_PWR:SYS_GPE_MFPH_PE8MFP_SC0_PWR@GPE_MFPH'] },
{ f: ['PE.9', 'UART1_RXD:SYS_GPE_MFPH_PE9MFP_UART1_RXD@GPE_MFPH', 'SPI0_MOSI1:SYS_GPE_MFPH_PE9MFP_SPI0_MOSI1@GPE_MFPH', 'I2C1_SDA:SYS_GPE_MFPH_PE9MFP_I2C1_SDA@GPE_MFPH', 'SC0_RST:SYS_GPE_MFPH_PE9MFP_SC0_RST@GPE_MFPH'] },
{ f: ['PE.10', 'SPI1_MISO:SYS_GPE_MFPH_PE10MFP_SPI1_MISO@GPE_MFPH', 'SPI0_MISO0:SYS_GPE_MFPH_PE10MFP_SPI0_MISO0@GPE_MFPH', 'UART1_nCTS:SYS_GPE_MFPH_PE10MFP_UART1_nCTS@GPE_MFPH', 'I2C0_SMBAL:SYS_GPE_MFPH_PE10MFP_I2C0_SMBAL@GPE_MFPH', 'SC0_DAT:SYS_GPE_MFPH_PE10MFP_SC0_DAT@GPE_MFPH'] },
{ f: ['PE.11', 'SPI1_MOSI:SYS_GPE_MFPH_PE11MFP_SPI1_MOSI@GPE_MFPH', 'SPI0_MOSI0:SYS_GPE_MFPH_PE11MFP_SPI0_MOSI0@GPE_MFPH', 'UART1_nRTS:SYS_GPE_MFPH_PE11MFP_UART1_nRTS@GPE_MFPH', 'I2C0_SMBSUS:SYS_GPE_MFPH_PE11MFP_I2C0_SMBSUS@GPE_MFPH', 'SC0_CLK:SYS_GPE_MFPH_PE11MFP_SC0_CLK@GPE_MFPH'] },
{ f: ['PE.12', 'SPI1_SS:SYS_GPE_MFPH_PE12MFP_SPI1_SS@GPE_MFPH', 'SPI0_SS:SYS_GPE_MFPH_PE12MFP_SPI0_SS@GPE_MFPH', 'UART1_TXD:SYS_GPE_MFPH_PE12MFP_UART1_TXD@GPE_MFPH', 'I2C0_SCL:SYS_GPE_MFPH_PE12MFP_I2C0_SCL@GPE_MFPH'] },
{ f: ['PE.13', 'SPI1_CLK:SYS_GPE_MFPH_PE13MFP_SPI1_CLK@GPE_MFPH', 'SPI0_CLK:SYS_GPE_MFPH_PE13MFP_SPI0_CLK@GPE_MFPH', 'UART1_RXD:SYS_GPE_MFPH_PE13MFP_UART1_RXD@GPE_MFPH', 'I2C0_SDA:SYS_GPE_MFPH_PE13MFP_I2C0_SDA@GPE_MFPH'] },
{ f: ['PE.14'] },
{ f: ['PE.15'] },

{ f: ['PF.0', 'X32_OUT:SYS_GPF_MFPL_PF0MFP_X32_OUT@GPF_MFPL', 'INT5:SYS_GPF_MFPL_PF0MFP_INT5@GPF_MFPL'] },
{ f: ['PF.1', 'X32_IN:SYS_GPF_MFPL_PF1MFP_X32_IN@GPF_MFPL'] },
{ f: ['PF.2', 'TAMPER:SYS_GPF_MFPL_PF2MFP_TAMPER@GPF_MFPL'] },
{ f: ['PF.3', 'XT1_OUT:SYS_GPF_MFPL_PF3MFP_XT1_OUT@GPF_MFPL', 'I2C1_SCL:SYS_GPF_MFPL_PF3MFP_I2C1_SCL@GPF_MFPL'] },
{ f: ['PF.4', 'XT1_IN:SYS_GPF_MFPL_PF4MFP_XT1_IN@GPF_MFPL', 'I2C1_SDA:SYS_GPF_MFPL_PF4MFP_I2C1_SDA@GPF_MFPL'] },
{ f: ['PF.5', 'ICE_CLK:SYS_GPF_MFPL_PF5MFP_ICE_CLK@GPF_MFPL'] },
{ f: ['PF.6', 'ICE_DAT:SYS_GPF_MFPL_PF6MFP_ICE_DAT@GPF_MFPL'] },
{ f: ['PF.7'] },
{ f: ['PF.8'] },
{ f: ['PF.9'] },
{ f: ['PF.10'] },
{ f: ['PF.11'] },
{ f: ['PF.12'] },
{ f: ['PF.13'] },
{ f: ['PF.14'] },
{ f: ['PF.15'] }
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
'ACMP0_N:Comparator0 negative input pin',
'ACMP0_O:Comparator0 output',
'ACMP0_P0:Comparator0 positive input pin',
'ACMP0_P1:Comparator0 positive input pin',
'ACMP0_P2:Comparator0 positive input pin',
'ACMP0_P3:Comparator0 positive input pin',

'ACMP1_N:Comparator1 negative input pin',
'ACMP1_O:Comparator1 output',
'ACMP1_P0:Comparator1 positive input pin',
'ACMP1_P1:Comparator1 positive input pin',
'ACMP1_P2:Comparator1 positive input pin',
'ACMP1_P3:Comparator1 positive input pin',

'CAN0_RXD:CAN bus receiver input',
'CAN0_TXD:CAN bus transmitter input',

'CLKO:Clock Out',

'DAC:DAC analog output',

'EADC_CH0:ADC0 analog input',
'EADC_CH1:ADC1 analog input',
'EADC_CH2:ADC2 analog input',
'EADC_CH3:ADC3 analog input',
'EADC_CH4:ADC4 analog input',
'EADC_CH5:ADC5 analog input',
'EADC_CH6:ADC6 analog input',
'EADC_CH7:ADC7 analog input',
'EADC_CH8:ADC8 analog input',
'EADC_CH9:ADC9 analog input',
'EADC_CH10:ADC10 analog input',
'EADC_CH11:ADC11 analog input',
'EADC_CH12:ADC12 analog input',
'EADC_CH13:ADC13 analog input',
'EADC_CH14:ADC14 analog input',
'EADC_CH15:ADC15 analog input',

'EBI_AD0:EBI address/data bus bit 0',
'EBI_AD1:EBI address/data bus bit 1',
'EBI_AD2:EBI address/data bus bit 2',
'EBI_AD3:EBI address/data bus bit 3',
'EBI_AD4:EBI address/data bus bit 4',
'EBI_AD5:EBI address/data bus bit 5',
'EBI_AD6:EBI address/data bus bit 6',
'EBI_AD7:EBI address/data bus bit 7',
'EBI_AD8:EBI address/data bus bit 8',
'EBI_AD9:EBI address/data bus bit 9',
'EBI_AD10:EBI address/data bus bit 10',
'EBI_AD11:EBI address/data bus bit 11',
'EBI_AD12:EBI address/data bus bit 12',
'EBI_AD13:EBI address/data bus bit 13',
'EBI_AD14:EBI address/data bus bit 14',
'EBI_AD15:EBI address/data bus bit 15',
'EBI_ADR16:EBI address bus bit 16',
'EBI_ADR17:EBI address bus bit 17',
'EBI_ADR18:EBI address bus bit 18',
'EBI_ADR19:EBI address bus bit 19',
'EBI_ALE:EBI address latch enable output pin',
'EBI_MCLK:EBI external clock output pin',
'EBI_nCS0:EBI chip select 0 enable output pin',
'EBI_nCS1:EBI chip select 1 enable output pin',
'EBI_nRD:EBI read enable output pin',
'EBI_nWR:EBI write enable output pin',
'EBI_nWRH:EBI high byte write enable output pin',
'EBI_nWRL:EBI low byte write enable output pin',

'I2C0_SCL:I2C0 clock pin',
'I2C0_SDA:I2C0 data input/output pin',
'I2C0_SMBAL:I2C0 SMBus SMBALTER# pin',
'I2C0_SMBSUS:I2C0 SMBus SMBSUS# pin (PMBus CONTROL pin)',

'I2C1_SCL:I2C1 clock pin',
'I2C1_SDA:I2C1 data input/output pin',
'I2C1_SMBAL:I2C1 SMBus SMBALTER# pin',
'I2C1_SMBSUS:I2C1 SMBus SMBSUS# pin (PMBus CONTROL pin)',

'ICE_CLK:Serial wired debugger clock pin',
'ICE_DAT:Serial wired debugger data pin',

'INT0:External interrupt0 input pin',
'INT1:External interrupt1 input pin',
'INT2:External interrupt2 input pin',
'INT3:External interrupt3 input pin',
'INT4:External interrupt4 input pin',
'INT5:External interrupt5 input pin',

'PWM0_BRAKE0:PWM0 break input 0',
'PWM0_BRAKE1:PWM0 break input 1',
'PWM0_CH0:PWM0 output/capture input',
'PWM0_CH1:PWM0 output/capture input',
'PWM0_CH2:PWM0 output/capture input',
'PWM0_CH3:PWM0 output/capture input',
'PWM0_CH4:PWM0 output/capture input',
'PWM0_CH5:PWM0 output/capture input',
'PWM0_SYNC_IN:PWM0 counter synchronous trigger input pin',
'PWM0_SYNC_OUT:PWM0 counter synchronous trigger output pin',

'PWM1_BRAKE0:PWM1 break input 0',
'PWM1_BRAKE1:PWM1 break input 1',
'PWM1_CH0:PWM1 output/capture input',
'PWM1_CH1:PWM1 output/capture input',
'PWM1_CH2:PWM1 output/capture input',
'PWM1_CH3:PWM1 output/capture input',
'PWM1_CH4:PWM1 output/capture input',
'PWM1_CH5:PWM1 output/capture input',

'SC0_CD:SmartCard card detect pin',
'SC0_CLK:SmartCard clock pin',
'SC0_DAT:SmartCard data pin',
'SC0_PWR:SmartCard power pin',
'SC0_RST:SmartCard reset pin',

'SPI0_CLK:SPI0 serial clock pin',
'SPI0_MISO0:SPI0 1st MISO (Master In, Slave Out) pin',
'SPI0_MISO1:SPI0 2nd MISO (Master In, Slave Out) pin',
'SPI0_MOSI0:SPI0 1st MOSI (Master Out, Slave In) pin',
'SPI0_MOSI1:SPI0 2nd MOSI (Master Out, Slave In) pin',
'SPI0_SS:SPI0 slave select pin',

'SPI1_CLK:SPI1 serial clock pin',
'SPI1_I2SMCLK:I2S1 master clock output pin',
'SPI1_MISO:SPI1 MISO (Master In, Slave Out) pin',
'SPI1_MOSI:SPI1 MOSI (Master Out, Slave In) pin',
'SPI1_SS:SPI1 slave select pin',

'SPI2_CLK:SPI2 serial clock pin',
'SPI2_I2SMCLK:I2S2 master clock output pin',
'SPI2_MISO:SPI2 MISO (Master In, Slave Out) pin',
'SPI2_MOSI:SPI2 MOSI (Master Out, Slave In) pin',
'SPI2_SS:SPI2 slave select pin',

'STADC:ADC external trigger input',
'STDAC:DAC external trigger input',

'T0:Timer0 event counter input / toggle output',
'T0_EXT:Timer0 external counter input',

'T1:Timer1 event counter input / toggle output',
'T1_EXT:Timer1 external counter input',

'T2:Timer2 event counter input / toggle output',
'T2_EXT:Timer2 external counter input',

'T3:Timer3 event counter input / toggle output',
'T3_EXT:Timer3 external counter input',

'TAMPER:TAMPER detector loop pin',

'TK0:Touch Key0',
'TK1:Touch Key1',
'TK2:Touch Key2',
'TK3:Touch Key3',
'TK4:Touch Key4',
'TK5:Touch Key5',
'TK6:Touch Key6',
'TK7:Touch Key7',
'TK8:Touch Key8',
'TK9:Touch Key9',
'TK10:Touch Key10',
'TK11:Touch Key11',
'TK12:Touch Key12',
'TK13:Touch Key13',
'TK14:Touch Key14',
'TK15:Touch Key15',
'TK16:Touch Key16',

'UART0_nCTS:Clear to Send input pin for UART0',
'UART0_nRTS:Request to Send output pin for UART0',
'UART0_RXD:Data receiver input pin for UART0',
'UART0_TXD:Data transmitter output pin for UART0',

'UART1_nCTS:Clear to Send input pin for UART1',
'UART1_nRTS:Request to Send output pin for UART1',
'UART1_RXD:Data receiver input pin for UART1',
'UART1_TXD:Data transmitter output pin for UART1',

'UART2_nCTS:Clear to Send input pin for UART2',
'UART2_nRTS:Request to Send output pin for UART2',
'UART2_RXD:Data receiver input pin for UART2',
'UART2_TXD:Data transmitter output pin for UART2',

'UART3_nCTS:Clear to Send input pin for UART3',
'UART3_nRTS:Request to Send output pin for UART3',
'UART3_RXD:Data receiver input pin for UART3',
'UART3_TXD:Data transmitter output pin for UART3',

'USB_VBUS_EN:USB external VBUS regulator enable pin',
'USB_VBUS_ST:USB external VBUS regulator status pin',

'X32_IN:External 32.768 kHZ (low speed) crystal input pin',
'X32_OUT:External 32.768 kHZ (low speed) crystal output pin',

'XT1_IN:External 4~20 MHz (high speed) crystal input pin',
'XT1_OUT:External 4~20 MHz (high speed) crystal output pin'
];

NUTOOL_PIN.g_cfg_gpioMatrix = [];
NUTOOL_PIN.g_cfg_shareBits = [];
NUTOOL_PIN.g_cfg_addGPIO = {};
NUTOOL_PIN.g_cfg_unusedGPIO = {
	"M451VG6AE(LQFP100)": {
		"PC.0": ["CAN0_TXD"],
		"PC.1": ["CAN0_RXD"],
		"PC.3": ["USB_VBUS_ST"],
		"PC.4": ["USB_VBUS_EN"],
		"PA.3": ["USB_VBUS_ST"],
		"PA.2": ["USB_VBUS_EN"],
		"PA.1": ["CAN0_TXD"],
		"PA.0": ["CAN0_RXD"],
		"PA.12": ["CAN0_TXD"],
		"PA.13": ["CAN0_RXD"]
	},
	"M451VE6AE(LQFP100)": function () {
		return this["M451VG6AE(LQFP100)"];
	},
	"M451RG6AE(LQFP64)": function () {
		return this["M451VG6AE(LQFP100)"];
	},
	"M451RE6AE(LQFP64)": function () {
		return this["M451VG6AE(LQFP100)"];
	},
	"M451LG6AE(LQFP48)": function () {
		return this["M451VG6AE(LQFP100)"];
	},
	"M451LE6AE(LQFP48)": function () {
		return this["M451VG6AE(LQFP100)"];
	},
	"M452RG6AE(LQFP64)": {
		"PC.0": ["CAN0_TXD"],
		"PC.1": ["CAN0_RXD"],
		"PA.1": ["CAN0_TXD"],
		"PA.0": ["CAN0_RXD"],
		"PA.12": ["CAN0_TXD"],
		"PA.13": ["CAN0_RXD"]
	},
	"M452RE6AE(LQFP64)": function () {
		return this["M452RG6AE(LQFP64)"];
	},
	"M452LG6AE(LQFP48)": function () {
		return this["M452RG6AE(LQFP64)"];
	},
	"M452LE6AE(LQFP48)": function () {
		return this["M452RG6AE(LQFP64)"];
	},
	"M4LEDRG6AE(LQFP64)": function () {
		return this["M452RG6AE(LQFP64)"];
	},
	"M4LEDRE6AE(LQFP64)": function () {
		return this["M452RG6AE(LQFP64)"];
	},
	"M4LEDLG6AE(LQFP48)": function () {
		return this["M452RG6AE(LQFP64)"];
	},
	"M4LEDLE6AE(LQFP48)": function () {
		return this["M452RG6AE(LQFP64)"];
	},
	"M451MLG6AE(LQFP48)": {
		"PC.0": ["CAN0_TXD"],
		"PC.1": ["CAN0_RXD"],
		"PC.3": ["USB_VBUS_ST"],
		"PC.4": ["USB_VBUS_EN"],
		"PA.3": ["USB_VBUS_ST"],
		"PA.2": ["USB_VBUS_EN"],
		"PA.1": ["CAN0_TXD"],
		"PA.0": ["CAN0_RXD"]
	},
	"M451MLE6AE(LQFP48)": function () {
		return this["M451MLG6AE(LQFP48)"];
	}
};

NUTOOL_PIN.decidepackageNumber = function (given_partNumber_package) {
	var partNumber_package,
		partNumber;

	if (typeof given_partNumber_package === 'undefined') {
		partNumber_package = NUTOOL_PIN.getg_partNumber_package();
	}
	else {
		partNumber_package = given_partNumber_package;
	}

	NUTOOL_PIN.g_packageNumber = partNumber_package.substring(partNumber_package.indexOf('(') + 1);
	NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.g_packageNumber.substring(0, NUTOOL_PIN.g_packageNumber.indexOf(')'));

	partNumber = partNumber_package.substring(0, partNumber_package.indexOf('('));
	switch (NUTOOL_PIN.g_packageNumber) {
		case 'LQFP100':
			switch (partNumber) {
				case "M451VG6AE":
				case "M451VE6AE":
					NUTOOL_PIN.g_packageNumberIndex = "LQFP100(RI)";
					break;
				default:
					NUTOOL_PIN.g_packageNumberIndex = "LQFP100(URI)";
					break;
			}
			break;
		case 'LQFP64':
			switch (partNumber) {
				case "M451RG6AE":
				case "M451RE6AE":
					NUTOOL_PIN.g_packageNumberIndex = "LQFP64(RI)";
					break;
				default:
					NUTOOL_PIN.g_packageNumberIndex = "LQFP64(URI)";
					break;
			}
			break;
		case 'LQFP48':
			switch (partNumber) {
				case "M451LG6AE":
				case "M451LE6AE":
					NUTOOL_PIN.g_packageNumberIndex = "LQFP48(RI)";
					break;
				case "M451MLG6AE":
				case "M451MLE6AE":
					NUTOOL_PIN.g_packageNumberIndex = "LQFP48(M051)";
					break;
				default:
					NUTOOL_PIN.g_packageNumberIndex = "LQFP48(URI)";
					break;
			}
			break;
	}
	partNumber_package = null;
	partNumber = null;
};