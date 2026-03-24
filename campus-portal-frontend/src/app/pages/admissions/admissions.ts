import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdmissionsService } from '../../services/admissions.service';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admissions.html',
  styleUrls: ['./admissions.css']
})
export class Admissions implements OnInit {

  admissions: any[] = [];       // Full API response (KCET, COMEDK, Mgmt)
  branches: any[] = [];         // To display based on selectedType
  selectedBranch: any = null;
  showModal: boolean = false;
  admissionId: string = "";
  selectedType: string = "";    // currently selected type

  constructor(
    private admissionsService: AdmissionsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadAdmissions();
  }

  loadAdmissions() {
    this.admissionsService.getAdmissions().subscribe((data: any[]) => {
      console.log("All Admission Types =>", data);
      this.admissions = data;

      // set default type first time
      if (data.length > 0) {
        this.selectedType = data[0].type;
        this.loadBranches();   // call here instead of setting manually
      }
    });
  }

  // Loads branches based on selected dropdown type
  loadBranches() {
    const selected = this.admissions.find(a => a.type === this.selectedType);

    if (selected) {
      this.branches = selected.branches;
      this.admissionId = selected._id;
    } else {
      this.branches = [];
    }

    this.cdr.detectChanges();
  }

  // when dropdown changes
  filterByType() {
    this.loadBranches();
  }

  openUpdateModal(branch: any) {
    this.selectedBranch = { ...branch };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  updateSeats() {
    this.admissionsService
      .updateSeats(this.admissionId, this.selectedBranch.name, this.selectedBranch.allocatedSeats)
      .subscribe(
        () => {
          alert("Seats updated successfully 👍");
          this.closeModal();
          this.loadAdmissions();   // refresh UI
        },
        () => {
          alert("Failed to update seats ❌");
        }
      );
  }
}
