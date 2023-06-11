import { ProColumns, ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';
import {useEffect, useRef} from "react";
import {ProFormInstance} from "@ant-design/pro-form/lib";

export type Props = {
  values: API.InterfaceInfo;
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visible: boolean;
};
const UpdateModal: React.FC<Props> = (props) => {
  const { values,columns, visible, onCancel, onSubmit } = props;
const formRef = useRef<ProFormInstance>();

  useEffect(() => {
formRef.current?.setFieldsValue(values);
  }, [values])

  return (
    <Modal visible={visible}  footer={null} onCancel={() => onCancel?.()}>
      <ProTable
        type="form"
        columns={columns}
       formRef={formRef}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};
export default UpdateModal;
