import { Object3D, OrthographicCamera, PerspectiveCamera, Quaternion, Raycaster, Vector3, WebGLRenderer } from "three";
import { GizmoOptions, ViewportGizmoEventMap } from "./types";
export declare const targetPosition: Vector3;
export declare const targetQuaternion: Quaternion;
export declare const q1: Quaternion;
export declare const q2: Quaternion;
export declare const raycaster: Raycaster;
export declare class ViewportGizmo extends Object3D<ViewportGizmoEventMap> {
    private _backgroundSphere?;
    private _bgSphereOpacity;
    private _spritePoints;
    private _container;
    private _domRect;
    private _viewport;
    private _renderer;
    private _orthoCamera;
    private _domElement;
    enabled: boolean;
    camera: OrthographicCamera | PerspectiveCamera;
    animated: boolean;
    animating: boolean;
    target: Vector3;
    dragging: boolean;
    size: number;
    speed: number;
    constructor(camera: PerspectiveCamera | OrthographicCamera, renderer: WebGLRenderer, options?: GizmoOptions);
    render(): void;
    update(): void;
    dispose(): void;
    private _updateOrientation;
    private _animate;
    private _setOrientation;
    private _startListening;
    private _onPointerDown;
    private _onPointerMove;
    private _onPointerLeave;
    private _handleClick;
    private _handleHover;
}
