import i18n from "@/i18n/config"
import { EventHandlerPanelConfig } from "@/page/App/components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@/utils/validationFactory"

export const generatorEventHandlerConfig = (
  baseWidgetName: string,
  events: { label: string; value: string }[] = [],
  labelName: string = i18n.t("editor.inspect.setter_label.event_handler"),
  attrName: string = "events",
  defaultValue?: string,
): EventHandlerPanelConfig => {
  return {
    id: `${baseWidgetName}-interaction-event-handler`,
    attrName: attrName,
    labelName: labelName,
    setterType: "EVENT_HANDLER_SETTER",
    useCustomLayout: true,
    defaultValue: defaultValue,
    eventHandlerConfig: { events, methods: [] },
    childrenSetter: [
      {
        id: `${baseWidgetName}-interaction-event-handler-event`,
        labelName: i18n.t("editor.inspect.setter_label.event"),
        setterType: "BASE_SELECT_SETTER",
        attrName: "eventType",
        options: events,
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-action`,
        labelName: i18n.t("editor.inspect.setter_label.action"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.action"),
        setterType: "EVENT_ACTION_SELECT_SETTER",
        attrName: "actionType",
        options: [
          {
            label: i18n.t("editor.inspect.setter_label.trigger_query"),
            value: "datasource",
          },
          {
            label: i18n.t("editor.inspect.setter_label.control_component"),
            value: "widget",
          },
          {
            label: i18n.t("editor.inspect.setter_label.go_to_url"),
            value: "openUrl",
          },
          {
            label: i18n.t("editor.inspect.setter_label.show_notification"),
            value: "showNotification",
          },
          {
            label: i18n.t("editor.inspect.setter_label.set_router"),
            value: "setRouter",
          },
        ],
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-query`,
        labelName: "Query",
        setterType: "EVENT_TARGET_ACTION_SELECT_SETTER",
        attrName: "queryID",
        bindAttrName: ["actionType"],
        shown: (type) => type === "datasource",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-actionMethod`,
        labelName: i18n.t("editor.inspect.setter_label.method"),
        setterType: "BASE_SELECT_SETTER",
        attrName: "widgetMethod",
        bindAttrName: ["queryID"],
        shown: (type) => type === "datasource",
        options: [{ label: "run", value: "executeAction" }],
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-component`,
        labelName: i18n.t("editor.inspect.setter_label.component"),
        setterType: "EVENT_TARGET_SELECT_SETTER",
        attrName: "widgetID",
        bindAttrName: ["actionType"],
        shown: (type) => type === "widget",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-Method`,
        labelName: i18n.t("editor.inspect.setter_label.method"),
        setterType: "EVENT_WIDGET_METHOD_SELECT_SETTER",
        attrName: "widgetMethod",
        bindAttrName: ["widgetID"],
        shown: (widgetID) => !!widgetID,
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-Value`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setValue",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setHidden`,
        labelName: i18n.t("editor.inspect.setter_label.hidden"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        useCustomLayout: true,
        openDynamic: true,
        shown: (widgetMethod) => widgetMethod === "setHidden",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setDisabled`,
        labelName: i18n.t("editor.inspect.setter_label.disabled"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        // expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        useCustomLayout: true,
        openDynamic: true,
        shown: (widgetMethod) => widgetMethod === "setDisabled",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-startValue`,
        labelName: i18n.t("editor.inspect.setter_label.start_date"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setStartValue",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-endValue`,
        labelName: i18n.t("editor.inspect.setter_label.end_data"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setEndValue",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setPrimaryValue`,
        labelName: i18n.t("editor.method.statistics.primary_value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        placeholder: "{{ 1234 }}",
        // expectedType: VALIDATION_TYPES.NUMBER,
        shown: (widgetMethod) => widgetMethod === "setPrimaryValue",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-imageUrl`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setImageUrl",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-fileUrl`,
        labelName: i18n.t("editor.inspect.setter_label.file_url"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setFileUrl",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-videoUrl`,
        labelName: i18n.t("editor.inspect.setter_label.video_url"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setVideoUrl",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-speed`,
        labelName: i18n.t("editor.method.speed.speed"),
        placeholder: "{{ 1.5 }}",
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        // expectedType: VALIDATION_TYPES.NUMBER,
        shown: (widgetMethod) => widgetMethod === "setSpeed",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-volume`,
        labelName: i18n.t("editor.method.set_volume.volume"),
        placeholder: "{{ 0.5 }}",
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        // expectedType: VALIDATION_TYPES.NUMBER,
        shown: (widgetMethod) => widgetMethod === "setVolume",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-seekTo`,
        labelName:
          i18n.t("editor.method.seek_to.time") +
          i18n.t("editor.method.seek_to.unit"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        // expectedType: VALIDATION_TYPES.NUMBER,
        shown: (widgetMethod) => widgetMethod === "seekTo",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-loop`,
        labelName: i18n.t("editor.method.loop"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
        openDynamic: true,
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        // expectedType: VALIDATION_TYPES.BOOLEAN,
        shown: (widgetMethod) => widgetMethod === "setLoop",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-mute`,
        labelName: i18n.t("editor.method.mute"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
        openDynamic: true,
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        // expectedType: VALIDATION_TYPES.BOOLEAN,
        shown: (widgetMethod) => widgetMethod === "mute",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-showControls`,
        labelName: i18n.t("editor.method.show_controls"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
        openDynamic: true,
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        // expectedType: VALIDATION_TYPES.BOOLEAN,
        shown: (widgetMethod) => widgetMethod === "showControls",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-disabled`,
        labelName: i18n.t("editor.inspect.setter_label.disabled"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "disabled",
        bindAttrName: ["type"],
        useCustomLayout: true,
        openDynamic: true,
        shown: (type) => type === "widget",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-script`,
        setterType: "INPUT_SETTER",
        attrName: "script",
        bindAttrName: ["actionType"],
        expectedType: VALIDATION_TYPES.STRING,
        shown: (type) => type === "script",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-URL`,
        labelName: "URL",
        setterType: "INPUT_SETTER",
        attrName: "url",
        bindAttrName: ["actionType"],
        expectedType: VALIDATION_TYPES.STRING,
        shown: (type) => type === "openUrl",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-newTab`,
        labelName: i18n.t("editor.inspect.setter_label.new_tab"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "newTab",
        bindAttrName: ["actionType"],
        useCustomLayout: true,
        openDynamic: true,
        shown: (type) => type === "openUrl",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setCurrentViewKey`,
        labelName: i18n.t("editor.inspect.setter_label.key"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "key",
        bindAttrName: ["widgetMethod"],
        shown: (type) => type === "setCurrentViewKey",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setCurrentViewIndex`,
        labelName: i18n.t("editor.inspect.setter_label.index"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.NUMBER,
        attrName: "index",
        bindAttrName: ["widgetMethod"],
        shown: (type) => type === "setCurrentViewIndex",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-showNextView`,
        labelName: i18n.t("editor.inspect.setter_label.loop_back_to_start"),
        setterType: "SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "showNextViewLoopBack",
        bindAttrName: ["widgetMethod"],
        shown: (type) => type === "showNextView",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-showNextVisibleView`,
        labelName: i18n.t("editor.inspect.setter_label.loop_back_to_start"),
        setterType: "SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "showNextVisibleViewLoopBack",
        bindAttrName: ["widgetMethod"],
        shown: (type) => type === "showNextVisibleView",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-showPreviousView`,
        labelName: i18n.t("editor.inspect.setter_label.loop_start_to_back"),
        setterType: "SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "showPreviousViewLoopBack",
        bindAttrName: ["widgetMethod"],
        shown: (type) => type === "showPreviousView",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-showPreviousVisibleView`,
        labelName: i18n.t("editor.inspect.setter_label.loop_start_to_back"),
        setterType: "SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "showPreviousVisibleViewLoopBack",
        bindAttrName: ["widgetMethod"],
        shown: (type) => type === "showPreviousVisibleView",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-title`,
        labelName: i18n.t("editor.inspect.setter_label.title"),
        setterType: "INPUT_SETTER",
        attrName: "title",
        bindAttrName: ["actionType"],
        expectedType: VALIDATION_TYPES.STRING,
        shown: (type) => type === "showNotification",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-description`,
        labelName: i18n.t("editor.inspect.setter_label.description"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "description",
        bindAttrName: ["actionType"],
        shown: (type) => type === "showNotification",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-notification-type`,
        labelName: i18n.t("editor.inspect.setter_label.type"),
        setterType: "BASE_SELECT_SETTER",
        attrName: "notificationType",
        bindAttrName: ["actionType"],
        shown: (type) => type === "showNotification",
        options: [
          {
            label: i18n.t(
              "editor.inspect.setter_default_value.message_type.success",
            ),
            value: "success",
          },
          {
            label: i18n.t(
              "editor.inspect.setter_default_value.message_type.error",
            ),
            value: "error",
          },
          {
            label: i18n.t(
              "editor.inspect.setter_default_value.message_type.warning",
            ),
            value: "warning",
          },
          {
            label: i18n.t(
              "editor.inspect.setter_default_value.message_type.info",
            ),
            value: "info",
          },
        ],
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-page`,
        labelName: i18n.t("editor.inspect.setter_label.page"),
        setterType: "EVENT_TARGET_PAGE_SELECT_SETTER",
        placeholder: i18n.t(
          "editor.inspect.setter_content.select_page_setter.placeholder",
        ),
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "pagePath",
        bindAttrName: ["actionType"],
        shown: (type) => type === "setRouter",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-view-path`,
        labelName: i18n.t("editor.page.label_name.view_path"),
        placeholder: i18n.t(
          "editor.inspect.setter_content.select_view_setter.placeholder",
        ),
        setterType: "EVENT_TARGET_VIEW_PATH_SELECT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "viewPath",
        bindAttrName: ["actionType"],
        shown: (type) => type === "setRouter",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-duration`,
        labelName: `${i18n.t("editor.inspect.setter_label.duration")}(ms)`,
        setterType: "INPUT_SETTER",
        attrName: "duration",
        bindAttrName: ["actionType"],
        expectedType: VALIDATION_TYPES.NUMBER,
        placeholder: "{{4500}}",
        shown: (type) => type === "showNotification",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-enabled`,
        labelName: i18n.t("editor.inspect.setter_label.only_run_when"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.only_run_when"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "enabled",
      },
    ],
  }
}
