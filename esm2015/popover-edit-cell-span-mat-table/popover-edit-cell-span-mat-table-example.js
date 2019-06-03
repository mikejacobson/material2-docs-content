/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
/**
 * @record
 */
export function Person() { }
if (false) {
    /** @type {?} */
    Person.prototype.id;
    /** @type {?} */
    Person.prototype.firstName;
    /** @type {?} */
    Person.prototype.middleName;
    /** @type {?} */
    Person.prototype.lastName;
}
/** @type {?} */
const PERSON_DATA = [
    { id: 1, firstName: 'Terra', middleName: 'Maduin', lastName: 'Branford' },
    { id: 2, firstName: 'Locke', middleName: '', lastName: 'Cole' },
    { id: 3, firstName: 'Celes', middleName: 'Gestahl', lastName: 'Chere' },
    { id: 4, firstName: 'Edgar', middleName: 'Roni', lastName: 'Figaro' },
    { id: 5, firstName: 'Sabin', middleName: 'Rene', lastName: 'Figaro' },
    { id: 6, firstName: 'Clyde', middleName: '"Shadow"', lastName: 'Arrowny' },
    { id: 7, firstName: 'Setzer', middleName: '', lastName: 'Gabbiani' },
    { id: 8, firstName: 'Cid', middleName: 'Del Norte', lastName: 'Marquez' },
    { id: 9, firstName: 'Mog', middleName: '', lastName: 'McMoogle' },
];
/**
 * \@title Material Popover Edit spanning multiple columns on a Material data-table
 */
export class PopoverEditCellSpanMatTableExample {
    constructor() {
        this.displayedColumns = ['id', 'firstName', 'middleName', 'lastName'];
        this.dataSource = new ExampleDataSource();
        this.preservedValues = new WeakMap();
    }
    /**
     * @param {?} person
     * @param {?} f
     * @return {?}
     */
    onSubmit(person, f) {
        if (!f.valid) {
            return;
        }
        person.firstName = f.value['firstName'];
        person.middleName = f.value['middleName'];
        person.lastName = f.value['lastName'];
    }
}
PopoverEditCellSpanMatTableExample.decorators = [
    { type: Component, args: [{
                selector: 'popover-edit-cell-span-mat-table-example',
                template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <ng-template #nameEdit let-ctx>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [matEditLensPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (matEditLensPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div mat-edit-content class=\"example-input-container\">\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n                [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n                [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n                [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n          </mat-form-field>\n        </div>\n\n        <div mat-edit-actions>\n          <button mat-button type=\"submit\">Confirm</button>\n          <button mat-button cdkEditRevert>Revert</button>\n          <button mat-button cdkEditClose>Close</button>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let person\"> {{person.id}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"firstName\">\n    <th mat-header-cell *matHeaderCellDef> First Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n        [matPopoverEditColspan]=\"{after: 2}\">\n      {{person.firstName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"middleName\">\n    <th mat-header-cell *matHeaderCellDef> Middle Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n        [matPopoverEditColspan]=\"{before:1 , after: 1}\">\n      {{person.middleName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"lastName\">\n    <th mat-header-cell *matHeaderCellDef> Last Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n        [matPopoverEditColspan]=\"{before: 2}\">\n      {{person.lastName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container mat-form-field {\n  flex: 1;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    PopoverEditCellSpanMatTableExample.prototype.displayedColumns;
    /** @type {?} */
    PopoverEditCellSpanMatTableExample.prototype.dataSource;
    /** @type {?} */
    PopoverEditCellSpanMatTableExample.prototype.preservedValues;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(PERSON_DATA);
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        return this.data;
    }
    /**
     * @return {?}
     */
    disconnect() { }
}
if (false) {
    /**
     * Stream of data that is provided to the table.
     * @type {?}
     */
    ExampleDataSource.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLW1hdC10YWJsZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDOzs7O0FBRWpELDRCQUtDOzs7SUFKQyxvQkFBVzs7SUFDWCwyQkFBa0I7O0lBQ2xCLDRCQUFtQjs7SUFDbkIsMEJBQWlCOzs7TUFHYixXQUFXLEdBQWE7SUFDNUIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO0lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQztJQUM3RCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7SUFDckUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDO0lBQ25FLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQztJQUNuRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUM7SUFDeEUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO0lBQ2xFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQztJQUN2RSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7Q0FDaEU7Ozs7QUFVRCxNQUFNLE9BQU8sa0NBQWtDO0lBTC9DO1FBTUUscUJBQWdCLEdBQWEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMzRSxlQUFVLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBRTVCLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztJQVd4RCxDQUFDOzs7Ozs7SUFUQyxRQUFRLENBQUMsTUFBYyxFQUFFLENBQVM7UUFDaEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDWixPQUFPO1NBQ1I7UUFFRCxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQ0FBMEM7Z0JBRXBELHkwR0FBNEQ7O2FBQzdEOzs7O0lBRUMsOERBQTJFOztJQUMzRSx3REFBcUM7O0lBRXJDLDZEQUFzRDs7Ozs7Ozs7O0FBb0J4RCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBa0I7SUFBekQ7Ozs7O1FBRUUsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFXLFdBQVcsQ0FBQyxDQUFDO0lBUXBELENBQUM7Ozs7O0lBTEMsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsVUFBVSxLQUFJLENBQUM7Q0FDaEI7Ozs7OztJQVJDLGlDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uIHtcbiAgaWQ6IG51bWJlcjtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIG1pZGRsZU5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgUEVSU09OX0RBVEE6IFBlcnNvbltdID0gW1xuICB7aWQ6IDEsIGZpcnN0TmFtZTogJ1RlcnJhJywgbWlkZGxlTmFtZTogJ01hZHVpbicsIGxhc3ROYW1lOiAnQnJhbmZvcmQnfSxcbiAge2lkOiAyLCBmaXJzdE5hbWU6ICdMb2NrZScsIG1pZGRsZU5hbWU6ICcnLCBsYXN0TmFtZTogJ0NvbGUnfSxcbiAge2lkOiAzLCBmaXJzdE5hbWU6ICdDZWxlcycsIG1pZGRsZU5hbWU6ICdHZXN0YWhsJywgbGFzdE5hbWU6ICdDaGVyZSd9LFxuICB7aWQ6IDQsIGZpcnN0TmFtZTogJ0VkZ2FyJywgbWlkZGxlTmFtZTogJ1JvbmknLCBsYXN0TmFtZTogJ0ZpZ2Fybyd9LFxuICB7aWQ6IDUsIGZpcnN0TmFtZTogJ1NhYmluJywgbWlkZGxlTmFtZTogJ1JlbmUnLCBsYXN0TmFtZTogJ0ZpZ2Fybyd9LFxuICB7aWQ6IDYsIGZpcnN0TmFtZTogJ0NseWRlJywgbWlkZGxlTmFtZTogJ1wiU2hhZG93XCInLCBsYXN0TmFtZTogJ0Fycm93bnknfSxcbiAge2lkOiA3LCBmaXJzdE5hbWU6ICdTZXR6ZXInLCBtaWRkbGVOYW1lOiAnJywgbGFzdE5hbWU6ICdHYWJiaWFuaSd9LFxuICB7aWQ6IDgsIGZpcnN0TmFtZTogJ0NpZCcsIG1pZGRsZU5hbWU6ICdEZWwgTm9ydGUnLCBsYXN0TmFtZTogJ01hcnF1ZXonfSxcbiAge2lkOiA5LCBmaXJzdE5hbWU6ICdNb2cnLCBtaWRkbGVOYW1lOiAnJywgbGFzdE5hbWU6ICdNY01vb2dsZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgTWF0ZXJpYWwgUG9wb3ZlciBFZGl0IHNwYW5uaW5nIG11bHRpcGxlIGNvbHVtbnMgb24gYSBNYXRlcmlhbCBkYXRhLXRhYmxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BvcG92ZXItZWRpdC1jZWxsLXNwYW4tbWF0LXRhYmxlLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsncG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdwb3BvdmVyLWVkaXQtY2VsbC1zcGFuLW1hdC10YWJsZS1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRWRpdENlbGxTcGFuTWF0VGFibGVFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ2lkJywgJ2ZpcnN0TmFtZScsICdtaWRkbGVOYW1lJywgJ2xhc3ROYW1lJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcblxuICByZWFkb25seSBwcmVzZXJ2ZWRWYWx1ZXMgPSBuZXcgV2Vha01hcDxQZXJzb24sIGFueT4oKTtcblxuICBvblN1Ym1pdChwZXJzb246IFBlcnNvbiwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGVyc29uLmZpcnN0TmFtZSA9IGYudmFsdWVbJ2ZpcnN0TmFtZSddO1xuICAgIHBlcnNvbi5taWRkbGVOYW1lID0gZi52YWx1ZVsnbWlkZGxlTmFtZSddO1xuICAgIHBlcnNvbi5sYXN0TmFtZSA9IGYudmFsdWVbJ2xhc3ROYW1lJ107XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIHNvdXJjZSB0byBwcm92aWRlIHdoYXQgZGF0YSBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIHRhYmxlLiBOb3RlIHRoYXQgdGhlIGRhdGEgc291cmNlXG4gKiBjYW4gcmV0cmlldmUgaXRzIGRhdGEgaW4gYW55IHdheS4gSW4gdGhpcyBjYXNlLCB0aGUgZGF0YSBzb3VyY2UgaXMgcHJvdmlkZWQgYSByZWZlcmVuY2VcbiAqIHRvIGEgY29tbW9uIGRhdGEgYmFzZSwgRXhhbXBsZURhdGFiYXNlLiBJdCBpcyBub3QgdGhlIGRhdGEgc291cmNlJ3MgcmVzcG9uc2liaWxpdHkgdG8gbWFuYWdlXG4gKiB0aGUgdW5kZXJseWluZyBkYXRhLiBJbnN0ZWFkLCBpdCBvbmx5IG5lZWRzIHRvIHRha2UgdGhlIGRhdGEgYW5kIHNlbmQgdGhlIHRhYmxlIGV4YWN0bHkgd2hhdFxuICogc2hvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPFBlcnNvbj4ge1xuICAvKiogU3RyZWFtIG9mIGRhdGEgdGhhdCBpcyBwcm92aWRlZCB0byB0aGUgdGFibGUuICovXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcnNvbltdPihQRVJTT05fREFUQSk7XG5cbiAgLyoqIENvbm5lY3QgZnVuY3Rpb24gY2FsbGVkIGJ5IHRoZSB0YWJsZSB0byByZXRyaWV2ZSBvbmUgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGRhdGEgdG8gcmVuZGVyLiAqL1xuICBjb25uZWN0KCk6IE9ic2VydmFibGU8UGVyc29uW10+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHt9XG59XG4iXX0=