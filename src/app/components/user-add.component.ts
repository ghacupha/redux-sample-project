import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {State} from "../state/user.reducer";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../users/users.model";
import {userHasBeenCreated} from "../state/user.actions";

@Component({
  selector: 'app-add-user',
  template: `
    <h4>Add a new User</h4>
    <form name="editForm" (ngSubmit)="save()" [formGroup]="editForm">
      <div>
        <div class="form-group">
          <label for="id">ID</label>
          <input type="text" class="form-control" id="id" name="id" formControlName="id" readonly />
        </div>

        <div class="form-group">
          <label class="form-control-label" for="field_Name">Name</label>
          <input type="text" class="form-control" name="name" id="field_Name"
                 formControlName="name"/>
        </div>

        <div class="form-group">
          <label class="form-control-label" for="field_Email">Email</label>
          <input type="text" class="form-control" name="email" id="field_Email"
                 formControlName="email"/>
        </div>

        <div class="form-group">
          <label class="form-control-label" for="field_Purpose">Purpose</label>
          <input type="text" class="form-control" name="purpose" id="field_Purpose"
                 formControlName="purpose"/>
        </div>

        <div class="form-group">
          <label class="form-control-label" for="field_Programme">Programme</label>
          <input type="text" class="form-control" name="programme" id="field_Programme"
                 formControlName="programme"/>
        </div>
      </div>
      <div>
        <button type="submit" id="save-entity" [disabled]="editForm.invalid || isSaving" class="btn btn-primary">
          <span>Save</span>
        </button>
      </div>
    </form>
  `
})
export class UserAddComponent {

  editForm: FormGroup = this.fb.group({
    id: [],
    name: [null, []],
    email: [null, []],
    purpose: [null, []],
    programme: [null, []],
  });

  isSaving: boolean = false;

  constructor(private state: Store<State>, private fb: FormBuilder) {
  }

  save(){
    this.isSaving = true;
    const user = this.createFromForm();
    this.state.dispatch(userHasBeenCreated({user}))
    this.isSaving = false;
  }

  private createFromForm(): User {
    return {
      ...new User(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      email: this.editForm.get(['email'])!.value,
      purpose: this.editForm.get(['purpose'])!.value,
      programme: this.editForm.get(['programme'])!.value,
    };
  }

  private updateForm(user: User): void {
    this.editForm.patchValue({
      id: user.id,
      name: user.name,
      email: user.email,
      purpose: user.purpose,
      programme: user.programme,
    });
  }
}
