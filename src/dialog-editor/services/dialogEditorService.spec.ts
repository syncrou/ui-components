import DialogEditor from './dialogEditorService';
import * as angular from 'angular';

describe('DialogEditor test', () => {
  let dialogEditor;

  beforeEach(() => {
    angular.mock.module('miqStaticAssets.dialogEditor');
    angular.mock.module('miqStaticAssets.common');
    angular.mock.inject(() => {
      dialogEditor = new DialogEditor();
    });
  });

  describe('#setData', () => {
    it('sets data to the data property', () => {
      dialogEditor.setData('test');
      expect(dialogEditor.data).toEqual('test');
    });
  });

  describe('#getDialogId', () => {
    let dialogData = {content: [{id: 123}]};

    beforeEach(() => {
      dialogEditor.setData(dialogData);
    });

    it('returns the id of the dialog', () => {
      expect(dialogEditor.getDialogId()).toEqual(123);
    });
  });

  describe('#getDialogLabel', () => {
    let dialogData = {content: [{label: 'label'}]};

    beforeEach(() => {
      dialogEditor.setData(dialogData);
    });

    it('returns the label of the dialog', () => {
      expect(dialogEditor.getDialogLabel()).toEqual('label');
    });
  });

  describe('#getDialogDescription', () => {
    let dialogData = {content: [{description: 'description'}]};

    beforeEach(() => {
      dialogEditor.setData(dialogData);
    });

    it('returns the description of the dialog', () => {
      expect(dialogEditor.getDialogDescription()).toEqual('description');
    });
  });

  describe('#getDialogTabs', () => {
    let dialogData = {content: [{dialog_tabs: 'dialog_tabs'}]};

    beforeEach(() => {
      dialogEditor.setData(dialogData);
    });

    describe('when the values on a field are a string', () => {
      let dialogData = {
        content: [{
          dialog_tabs: [{
            dialog_groups: [{
              dialog_fields: [{
                values: 'nofailure'
              }]
            }]
          }]
        }]
      };

      beforeEach(() => {
        dialogEditor.setData(dialogData);
      });

      it('sets all of the field values correctly', () => {
        dialogEditor.getDialogTabs();
        let fieldValues = dialogEditor.data.content[0].dialog_tabs[0].dialog_groups[0].dialog_fields[0].values;
        expect(fieldValues).toEqual('nofailure');
      });
    });

    describe('when the values on a field are an object', () => {
      let dialogData = {
        content: [{
          dialog_tabs: [{
            dialog_groups: [{
              dialog_fields: [{
                values: ['0', 'zero']
              }]
            }]
          }]
        }]
      };

      beforeEach(() => {
        dialogEditor.setData(dialogData);
      });

      it('sets all of the field values based on a filter', () => {
        dialogEditor.getDialogTabs();
        let fieldValues = dialogEditor.data.content[0].dialog_tabs[0].dialog_groups[0].dialog_fields[0].values;
        expect(fieldValues).toEqual(['zero']);
      });
    });

    it('returns the dialog_tabs of the dialog', () => {
      expect(dialogEditor.getDialogTabs()).toEqual('dialog_tabs');
    });
  });

  describe('#getDynamicFields', () => {
    let field1 = {
      id: 1,
      name: 'field_1',
      dynamic: true
    };

    let field2 = {
      id: 2,
      name: 'field_2',
      dynamic: true
    };

    let field3 = {
      id: 3,
      name: 'field_3',
      dynamic: false
    };

    let data = {
      content: [{
        dialog_tabs: [{
          dialog_groups: [{
            dialog_fields: [field1, field2, field3]
          }]
        }]
      }]
    };

    beforeEach(() => {
      dialogEditor.setData(data);
    });

    describe('when the list of dynamic field contains the given field id', () => {
      it('returns the dynamic fields without the given field', () => {
        expect(dialogEditor.getDynamicFields('field_2')).toEqual([field1]);
      });
    });

    describe('when the list of dynamic field does not contain the given field id', () => {
      it('returns the full list of dynamic fields', () => {
        expect(dialogEditor.getDynamicFields('field_4')).toEqual([field1, field2]);
      });
    });
  });

  describe('#newFieldName', () => {
    let field1 = {
      name: 'textarea_box_1'
    };

    let field2 = {
      name: 'textarea_box_2'
    };

    let field3 = {
      name: 'radio_button_3'
    };

    let data = {
      content: [{
        dialog_tabs: [{
          dialog_groups: [{
            dialog_fields: [field1, field2, field3]
          }]
        }]
      }]
    };

    beforeEach(() => {
      dialogEditor.setData(data);
    });

    describe('when the list contains two elements starting by 1', () => {
      it('returns the new name with number 3', () => {
        expect(dialogEditor.newFieldName('textarea_box')).toEqual('textarea_box_3');
      });
    });

    describe('when the list contains an element not starting by 1', () => {
      it('returns the new name with number 1', () => {
        expect(dialogEditor.newFieldName('radio_button')).toEqual('radio_button_1');
      });
    });
  });
});
