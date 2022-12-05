import { PropType } from "vue";
declare const SliderCaptcha: {
    new(...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            backendImg: string;
            jigsawPosition: {
                left: number;
                top: number;
            };
            isBackendCheck: boolean;
            errHowTimesRefresh: number;
            allowEroor: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            backendImg: {
                type: StringConstructor;
                default: string;
                required: true;
            };
            jigsawPosition: {
                type: PropType<{
                    left: number;
                    top: number;
                }>;
                default: {};
            };
            /**是否需要后端校验 */
            isBackendCheck: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**失败几次刷新 */
            errHowTimesRefresh: {
                type: NumberConstructor;
                default: number;
            };
            allowEroor: {
                type: NumberConstructor;
                default: any;
            };
        }>> & {
            onVerifySuccess?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
            onVerifyError?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
            onVerifyRefresh?: (callback: any) => any;
            onVerifyChange?: (data: any, callback: any) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "backendImg" | "jigsawPosition" | "isBackendCheck" | "errHowTimesRefresh" | "allowEroor">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: ((event: "verifySuccess", ...args: unknown[]) => void) & ((event: "verifySuccess", ...args: any[]) => void) & ((event: "verifyError", ...args: unknown[]) => void) & ((event: "verifyError", ...args: any[]) => void) & ((event: "verifyRefresh", callback: any) => void) & ((event: "verifyChange", data: any, callback: any) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            backendImg: {
                type: StringConstructor;
                default: string;
                required: true;
            };
            jigsawPosition: {
                type: PropType<{
                    left: number;
                    top: number;
                }>;
                default: {};
            };
            /**是否需要后端校验 */
            isBackendCheck: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**失败几次刷新 */
            errHowTimesRefresh: {
                type: NumberConstructor;
                default: number;
            };
            allowEroor: {
                type: NumberConstructor;
                default: any;
            };
        }>> & {
            onVerifySuccess?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
            onVerifyError?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
            onVerifyRefresh?: (callback: any) => any;
            onVerifyChange?: (data: any, callback: any) => any;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            /**刷新 */
            verifyRefresh: (callback: any) => true;
            /**验证成功 */
            verifySuccess: any;
            /**验证失败 */
            verifyError: any;
            /**后端校验调用 */
            verifyChange: (data: any, callback: any) => true;
        }, string, {
            backendImg: string;
            jigsawPosition: {
                left: number;
                top: number;
            };
            isBackendCheck: boolean;
            errHowTimesRefresh: number;
            allowEroor: number;
        }, {}, string> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        backendImg: {
            type: StringConstructor;
            default: string;
            required: true;
        };
        jigsawPosition: {
            type: PropType<{
                left: number;
                top: number;
            }>;
            default: {};
        };
        /**是否需要后端校验 */
        isBackendCheck: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**失败几次刷新 */
        errHowTimesRefresh: {
            type: NumberConstructor;
            default: number;
        };
        allowEroor: {
            type: NumberConstructor;
            default: any;
        };
    }>> & {
        onVerifySuccess?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
        onVerifyError?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
        onVerifyRefresh?: (callback: any) => any;
        onVerifyChange?: (data: any, callback: any) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    backendImg: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    jigsawPosition: {
        type: PropType<{
            left: number;
            top: number;
        }>;
        default: {};
    };
    /**是否需要后端校验 */
    isBackendCheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**失败几次刷新 */
    errHowTimesRefresh: {
        type: NumberConstructor;
        default: number;
    };
    allowEroor: {
        type: NumberConstructor;
        default: any;
    };
}>> & {
    onVerifySuccess?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
    onVerifyError?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
    onVerifyRefresh?: (callback: any) => any;
    onVerifyChange?: (data: any, callback: any) => any;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**刷新 */
    verifyRefresh: (callback: any) => true;
    /**验证成功 */
    verifySuccess: any;
    /**验证失败 */
    verifyError: any;
    /**后端校验调用 */
    verifyChange: (data: any, callback: any) => true;
}, string, {
    backendImg: string;
    jigsawPosition: {
        left: number;
        top: number;
    };
    isBackendCheck: boolean;
    errHowTimesRefresh: number;
    allowEroor: number;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
export {
    SliderCaptcha
};
