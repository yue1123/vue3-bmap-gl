/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />
/// <reference path="./rightmenu.d.ts" />
/// <reference path="./tools.d.ts" />
declare namespace BMapGL {
	interface Overlay {
		/**
		 * 	抽象方法，用于初始化覆盖物，当调用map.addOverlay时，API将调用此方法。自定义覆盖物时需要实现此方法。自定义覆盖物时需要将覆盖物对应的HTML元素返回
		 * @param map
		 */
		initialize(map: Map): HTMLElement
		/**
		 * 判断覆盖物是否可见
		 */
		isVisible(): boolean
		/**
		 * 抽象方法，当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法
		 */
		draw(): void
		/**
		 * 	显示覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为空
		 */
		show(): void
		/**
		 * 隐藏覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为none
		 */
		hide(): void
		/**
		 * 	抽象方法，用于初始化覆盖物，当调用map.addOverlay时，API将调用此方法。自定义覆盖物时需要实现此方法。自定义覆盖物时需要将覆盖物对应的HTML元素返回
		 * @param map
		 */
		initialize(map: Map): HTMLElement
		/**
		 * 判断覆盖物是否可见
		 */
		isVisible(): boolean
		/**
		 * 抽象方法，当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法
		 */
		draw(): void
		/**
		 * 	显示覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为空
		 */
		show(): void
		/**
		 * 隐藏覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为none
		 */
		hide(): void
		addEventListener(event: string, handler: Callback): void
		removeEventListener(event: string, handler: Callback): void
		setOptions(obj: object): void
		getZIndex(lat: number, coordTyppe?: string): number
	}
	class Overlay {
		constructor()
		static getZIndex(lat: number, coordTyppe?: string): number
		[x: string]: any
	}
	type SymbolShapeType = number

	interface overlayCommonOptions {
		/**
		 * @default #000000
		 * 折线颜色
		 */
		strokeColor?: string
		/**
		 * 折线的宽度，以像素为单位
		 */
		strokeWeight?: number
		/**
		 * 折线的透明度，取值范围0 - 1
		 */
		strokeOpacity?: number
		/**
		 * 折线的样式
		 */
		strokeStyle?: string
		/**
		 * @default true
		 * 是否在调用map.clearOverlays清除此覆盖物，默认为true
		 */
		enableMassClear?: boolean
		/**
		 * @default false
		 * 是否启用线编辑，默认为false
		 */
		enableEditing?: boolean
		/**
		 * @default true
		 * 是否响应点击事件，默认为true
		 */
		enableClicking?: boolean
		/**
		 * @default false
		 * 是否开启大地线模式，true时，两点连线将以大地线的形式。默认为false
		 */
		geodesic: boolean
		/**
		 * @default true
		 * 是否进行跨经度180度裁剪，绘制跨精度180时为了优化效果，可以设置成false，默认为true
		 */
		clip: boolean
	}
	type PolylineOptions = overlayCommonOptions
	type PolygonOptions = overlayCommonOptions & {
		/**
		 * 面填充颜色，同CSS颜色
		 */
		fillColor: string

		/**
		 * 面填充的透明度，范围0-1
		 */
		fillOpacity: number
	}
	type CircleOptions = overlayCommonOptions & {
		/**
		 * 面填充颜色，同CSS颜色
		 */
		fillColor: string

		/**
		 * 面填充的透明度，范围0-1
		 */
		fillOpacity: number
	}
	interface GroundOverlayOptions {
		opacity?: number
		imageURL?: string
		displayOnMinLevel?: number
		displayOnMaxLevel?: number
	}
	interface Marker extends Overlay {
		openInfoWindow(infoWnd: InfoWindow): void
		closeInfoWindow(): void
		setIcon(icon: Icon): void
		getIcon(): Icon
		setPosition(position: Point): void
		getPosition(): Point
		setOffset(offset: Size): void
		getOffset(): Size
		setLabel(label: Label): void
		getLabel(): Label
		setTitle(title: string): void
		getTitle(): string
		setTop(isTop: boolean): void
		enableDragging(): void
		disableDragging(): void
		enableMassClear(): void
		disableMassClear(): void
		setZIndex(zIndex: number): void
		getMap(): Map
		addContextMenu(menu: ContextMenu): void
		removeContextMenu(menu: ContextMenu): void
		setAnimation(animation?: Animation): void
		setRotation(rotation: number): void
		getRotation(): number
		setShadow(shadow: Icon): void
		getShadow(): void
		addEventListener(event: string, handler: Callback): void
		removeEventListener(event: string, handler: Callback): void
		onclick: (event: { type: string; target: any }) => void
		ondblclick: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmousedown: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmouseup: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmouseout: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmouseover: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onremove: (event: { type: string; target: any }) => void
		oninfowindowclose: (event: { type: string; target: any }) => void
		oninfowindowopen: (event: { type: string; target: any }) => void
		ondragstart: (event: { type: string; target: any }) => void
		ondragging: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		ondragend: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onrightclick: (event: { type: string; target: any }) => void
	}
	class Marker {
		constructor(point: Point, opts?: MarkerOptions)
	}
	interface SymbolOptions {
		anchor?: Size
		fillColor?: string
		fillOpacity?: number
		scale?: number
		rotation?: number
		strokeColor?: string
		strokeOpacity?: number
		strokeWeight?: number
	}
	class IconSequence {
		constructor(symbol: symbol, offset?: string, repeat?: string, fixedRotation?: boolean)
	}
	interface PointCollection extends Overlay {
		setPoints(points: Point[]): void
		setStyles(styles: PointCollectionOption): void
		clear(): void
		onclick: (event: { type: string; target: any; point: Point }) => void
		onmouseover: (event: { type: string; target: any; point: Point }) => void
		onmouseout: (event: { type: string; target: any; point: Point }) => void
	}
	class PointCollection {
		constructor(points: Point[], opts?: PointCollectionOption)
	}
	interface MarkerOptions {
		/**
		 * 标注的位置偏移值
		 */
		offset?: Size
		/**
		 * 标注所用的图标对象
		 */
		icon?: Icon
		/**
		 * @default true
		 * 是否在调用map.clearOverlays清除此覆盖物，默认为true
		 */
		enableMassClear?: boolean
		/**
		 * @default false
		 * 是否启用拖拽，默认为false
		 */
		enableDragging?: boolean
		/**
		 * @default true
		 * 是否响应点击事件。默认为true
		 */
		enableClicking?: boolean
		/**
		 * @default false
		 * 拖拽标注时，标注是否开启离开地图表面效果。默认为false
		 */
		raiseOnDrag?: boolean
		/**
		 * 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
		 */
		draggingCursor?: string
		/**
		 * 旋转角度
		 */
		rotation?: number
		// shadow?: Icon
		/**
		 * 鼠标移到marker上的显示内容
		 */
		title?: string
	}
	interface InfoWindow extends Overlay {
		/**
		 * @default false
		 */
		// show: boolean

		position: Point
		/**
		 * 是否开启信息窗口打开时地图自动移动（默认开启）
		 * @default true
		 */
		autoPan: boolean
		/**
		 * 是否开启点击地图关闭信息窗口（默认开启）
		 * @default true
		 */
		closeOnClick: boolean
		/**
		 * 自定义部分的短信内容，可选项。
		 * 完整的短信内容包括：自定义部分+位置链接，不设置时，显示默认短信内容。
		 * 短信内容最长为140个字
		 */
		message: string
		setWidth(width: number): void
		setHeight(height: number): void
		redraw(): void
		setTitle(title: string | HTMLElement): void
		getTitle(): string | HTMLElement
		setContent(content: string | HTMLElement): void
		getContent(): string | HTMLElement
		getPosition(): Point
		enableMaximize(): void
		disableMaximize(): void
		isOpen(): boolean
		setMaxContent(content: string): void
		maximize(): void
		restore(): void
		enableAutoPan(): void
		disableAutoPan(): void
		enableCloseOnClick(): void
		disableCloseOnClick(): void
		addEventListener(event: string, handler: Callback): void
		removeEventListener(event: string, handler: Callback): void
		onclose: (event: { type: string; target: any; point: Point }) => void
		onopen: (event: { type: string; target: any; point: Point }) => void
		onmaximize: (event: { type: string; target: any }) => void
		onrestore: (event: { type: string; target: any }) => void
		onclickclose: (event: { type: string; target: any }) => void
	}
	class InfoWindow {
		constructor(content: string | HTMLElement, opts?: InfoWindowOptions)
	}
	interface Polygon extends Overlay {
		setPath(path: Point[]): void
		setPath(path: string[]): void
		getPath(): Point[]
		setStrokeColor(color: string): void
		getStrokeColor(): string
		setFillColor(color: string): void
		getFillColor(): string
		setStrokeOpacity(opacity: number): void
		getStrokeOpacity(): number
		setFillOpacity(opacity: number): void
		getFillOpacity(): number
		setStrokeWeight(weight: number): void
		getStrokeWeight(): number
		setStrokeStyle(style: string): void
		getStrokeStyle(): string
		getBounds(): Bounds
		enableEditing(): void
		disableEditing(): void
		enableMassClear(): void
		disableMassClear(): void
		setPointAt(index: number, point: Point): void
		setPositionAt(index: number, point: Point): void
		getMap(): Map
		addEventListener(event: string, handler: Callback): void
		removeEventListener(event: string, handler: Callback): void
		onclick: (event: { type: string; target: any }) => void
		ondblclick: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmousedown: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmouseup: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmouseout: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmouseover: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onremove: (event: { type: string; target: any }) => void
		onlineupdate: (event: { type: string; target: any }) => void
	}
	class Polygon {
		constructor(points: Point[] | string[], opts?: PolygonOptions)
	}
	interface PointCollectionOption {
		shape?: ShapeType
		color?: string
		size?: SizeType
	}
	type Animation = number
	interface InfoWindowOptions {
		/**
		 * 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
		 */
		width: 0 | RangeOf2<220, 730>
		/**
		 * 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
		 */
		height: 0 | RangeOf2<60, 650>
		/**
		 * 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
		 */
		maxWidth: RangeOf2<220, 730>
		/**
		 * 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置
		 */
		offset: Size
		/**
		 * 信息窗标题文字，支持HTML内容
		 */
		title: string
		/**
		 * @default true
		 * 是否开启信息窗口打开时地图自动移动（默认开启）
		 */
		enableAutoPan: boolean
		/**
		 * @default true
		 * 是否开启点击地图关闭信息窗口（默认开启）
		 */
		enableCloseOnClick: boolean
	}
	type ShapeType = number
	interface Icon extends Overlay {
		anchor: Size
		size: Size
		imageOffset: Size
		imageSize: Size
		imageUrl: Size
		infoWindowAnchor: Size
		printImageUrl: string
		setImageUrl(imageUrl: string): void
		setSize(size: Size): void
		setImageSize(offset: Size): void
		setAnchor(anchor: Size): void
		setImageOffset(offset: Size): void
		setInfoWindowAnchor(anchor: Size): void
		setPrintImageUrl(url: string): void
	}
	class Icon {
		constructor(url: string, size: Size, opts?: IconOptions)
	}
	interface Label extends Overlay {
		setStyle(styles: { [name: string]: string | number }): void
		setContent(content: string): void
		setPosition(position: Point): void
		getPosition(): Point
		setOffset(offset: Size): void
		getOffset(): Size
		setTitle(title: string): void
		getTitle(): string
		enableMassClear(): void
		disableMassClear(): void
		setZIndex(zIndex: number): void
		getMap(): Map
		addEventListener(event: string, handler: Callback): void
		removeEventListener(event: string, handler: Callback): void
		onclick: (event: { type: string; target: any }) => void
		ondblclick: (event: { type: string; target: any }) => void
		onmousedown: (event: { type: string; target: any }) => void
		onmouseup: (event: { type: string; target: any }) => void
		onmouseout: (event: { type: string; target: any }) => void
		onmouseover: (event: { type: string; target: any }) => void
		onremove: (event: { type: string; target: any }) => void
		onrightclick: (event: { type: string; target: any }) => void
	}
	class Label {
		constructor(content: string, opts?: LabelOptions)
	}
	interface Circle extends Overlay {
		setCenter(center: Point): void
		getCenter(): Point
		setRadius(radius: number): void
		getRadius(): number
		getBounds(): Bounds
		setStrokeColor(color: string): void
		getStrokeColor(): string
		setFillColor(color: string): void
		getFillColor(): string
		setStrokeOpacity(opacity: number): void
		getStrokeOpacity(): number
		setFillOpacity(opacity: number): void
		getFillOpacity(): number
		setStrokeWeight(weight: number): void
		getStrokeWeight(): number
		setStrokeStyle(style: string): void
		getStrokeStyle(): string
		enableEditing(): void
		disableEditing(): void
		enableMassClear(): void
		disableMassClear(): void
		getMap(): Map
		addEventListener(event: string, handler: Callback): void
		removeEventListener(event: string, handler: Callback): void
		onclick: (event: { type: string; target: any }) => void
		ondblclick: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmousedown: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmouseup: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmouseout: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmouseover: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onremove: (event: { type: string; target: any }) => void
		onlineupdate: (event: { type: string; target: any }) => void
	}
	class Circle {
		constructor(center: Point, radius: number, opts?: CircleOptions)
	}
	type SizeType = number
	interface IconOptions {
		anchor?: Size
		imageOffset?: Size
		imageSize?: Size
		srcset?: object
		printImageUrl?: string
	}
	interface LabelOptions {
		offset?: Size
		position?: Point
		enableMassClear?: boolean
	}
	interface Hotspot extends Overlay {
		setPosition(position: Point): void
		getPosition(): Point
		setText(text: string): void
		getText(): string
		setUserData(data: any): void
		getUserData(): any
	}
	class Hotspot {
		constructor(position: Point, opts?: HotspotOptions)
	}
	interface Symbol extends Overlay {
		setPath(path: string | SymbolShapeType): void
		setAnchor(anchor: Size): void
		setRotation(rotation: number): void
		setScale(scale: number): void
		setStrokeWeight(strokeWeight: number): void
		setStrokeColor(color: string): void
		setStrokeOpacity(opacity: number): void
		setFillOpacity(opacity: number): void
		setFillColor(color: string): void
	}
	class Symbol {
		constructor(path: string | SymbolShapeType, opts?: SymbolOptions)
	}
	interface Polyline extends Overlay {
		setPath(path: Point[]): void
		getPath(): Point[]
		setStrokeColor(color: string): void
		getStrokeColor(): string
		setFillColor(color: string): void
		getFillColor(): string
		setStrokeOpacity(opacity: number): void
		getStrokeOpacity(): number
		setFillOpacity(opacity: number): void
		getFillOpacity(): number
		setStrokeWeight(weight: number): void
		getStrokeWeight(): number
		setStrokeStyle(style: string): void
		getStrokeStyle(): string
		getBounds(): Bounds
		enableEditing(): void
		disableEditing(): void
		enableMassClear(): void
		disableMassClear(): void
		setPointAt(index: number, point: Point): void
		setPositionAt(index: number, point: Point): void
		getMap(): Map
		addEventListener(event: string, handler: Callback): void
		removeEventListener(event: string, handler: Callback): void
		onclick: (event: { type: string; target: any }) => void
		ondblclick: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmousedown: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmouseup: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmouseout: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onmouseover: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
		onremove: (event: { type: string; target: any }) => void
		onlineupdate: (event: { type: string; target: any }) => void
	}
	class Polyline {
		constructor(points: Point[], opts?: PolylineOptions)
	}
	interface GroundOverlay extends Overlay {
		setBounds(bounds: Bounds): void
		getBounds(): Bounds
		setOpacity(opcity: number): void
		getOpacity(): number
		setImageURL(url: string): void
		getImageURL(): string
		setDisplayOnMinLevel(level: number): void
		getDisplayOnMinLevel(): number
		setDispalyOnMaxLevel(level: number): void
		getDispalyOnMaxLevel(): number
		onclick: (event: { type: string; target: any }) => void
		ondblclick: (event: { type: string; target: any }) => void
	}
	class GroundOverlay {
		constructor(bounds: Bounds, opts?: GroundOverlayOptions)
	}
	interface HotspotOptions {
		text?: string
		offsets?: number[]
		userData?: any
		minZoom?: number
		maxZoom?: number
	}
	interface MapPanes {
		floatPane?: HTMLElement
		markerMouseTarget?: HTMLElement
		floatShadow?: HTMLElement
		labelPane?: HTMLElement
		markerPane?: HTMLElement
		markerShadow?: HTMLElement
		mapPane?: HTMLElement
	}
}

declare const BMap_Symbol_SHAPE_CIRCLE: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_RECTANGLE: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_RHOMBUS: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_STAR: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_POINT: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_PLANE: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_CAMERA: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_WARNING: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_SMILE: BMapGL.SymbolShapeType
declare const BMap_Symbol_SHAPE_CLOCK: BMapGL.SymbolShapeType

declare const BMAP_ANIMATION_DROP: BMapGL.Animation
declare const BMAP_ANIMATION_BOUNCE: BMapGL.Animation

declare const BMAP_POINT_SHAPE_CIRCLE: BMapGL.ShapeType
declare const APE_STAR: BMapGL.ShapeType
declare const APE_SQUARE: BMapGL.ShapeType
declare const APE_RHOMBUS: BMapGL.ShapeType
declare const APE_WATERDROP: BMapGL.ShapeType

declare const BMAP_POINT_SIZE_TINY: BMapGL.SizeType
declare const BMAP_POINT_SIZE_SMALLER: BMapGL.SizeType
declare const BMAP_POINT_SIZE_SMALL: BMapGL.SizeType
declare const BMAP_POINT_SIZE_NORMAL: BMapGL.SizeType
declare const BMAP_POINT_SIZE_BIG: BMapGL.SizeType
declare const BMAP_POINT_SIZE_BIGGER: BMapGL.SizeType
declare const BMAP_POINT_SIZE_HUGE: BMapGL.SizeType
